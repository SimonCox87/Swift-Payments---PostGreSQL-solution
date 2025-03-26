const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const pool = require("./db");
const updateRecord = require("./backend_logic/updateRecord");


// initialise an Express application instance
const app = express();
// create a HTTP server using the Express app
const server = http.createServer(app);
// set up a Socket.IO server instance with specified CORS configuration.
const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      // Allow requests from localhost, frontend in Docker, or no origin (for WebSocket cases)
      if (
        !origin || // No origin provided (common with WebSockets)
        origin === "http://localhost:3000" ||   
        origin === "http://frontend:3000" ||
        origin === "http://localhost:8080" 
      ) {
        callback(null, true); // Allow the request
      } else {
        console.error(`Blocked by CORS: ${origin}`); // Log the blocked origin
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

//middleware
// enable CORS to allow cross-origin requests e.g. from our React app
app.use(cors());
// enable parsing of JSON payloads in incoming requests.
app.use(express.json()); 

// WebSocket Connection Event
io.on("connection", (socket) => {
  console.log("A client connected:", socket.id)

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected:", socket.id);
  });
});

//RESTful API ROUTES//

// POST
app.post("/customers", async (req, res) => {
  try {
    // Begin the transaction.  We use this command because it ensures that on completion
    // updates are pushed as a batch and if any of them fail no updates are committed at all.
    // Ensures "atmoicity" ie updates are not pushed piecemeal.
    await pool.query("BEGIN");

    // Insert a new customer in customers table and retrieve customer_id, customer_status
    // and created for insertion into companies table
    const newCustomer = await pool.query(
      "INSERT INTO customers DEFAULT VALUES RETURNING customer_id, customer_status, created"
    );

    // Create the variables to be inserted into companies table to be passed as values in the
    // next query made to the database.
    const { customer_id, customer_status, created } = newCustomer.rows[0];

    // Insert into companies using the retrieved data
    await pool.query(
      "INSERT INTO companies (customer_id, customer_status, created) VALUES ($1, $2, $3)",
      [customer_id, customer_status, created]
    );

    await pool.query(
      "INSERT INTO contacts (customer_id, customer_status, created) VALUES ($1, $2, $3)",
      [customer_id, customer_status, created]
    );

    await pool.query(
      "INSERT INTO locations (customer_id, customer_status, created) VALUES ($1, $2, $3)",
      [customer_id, customer_status, created]
    );

    await pool.query(
      "INSERT INTO quotes (customer_id, customer_status, created) VALUES ($1, $2, $3)",
      [customer_id, customer_status, created]
    );
    // Commit the transaction
    await pool.query("COMMIT");

    //Get new tables, with newly added rows
    const updatedCustomersTable = await pool.query("SELECT * FROM customers");
    const updatedCompaniesTable = await pool.query("SELECT * FROM companies");
    const updatedContactsTable = await pool.query("SELECT * FROM contacts");
    const updatedLocationsTable = await pool.query("SELECT * FROM locations");
    const updatedQuotesTable = await pool.query("SELECT * FROM quotes");

    // Emit the new customer to all connected clients
    io.emit("update:customers", updatedCustomersTable.rows);
    io.emit("update:companies", updatedCompaniesTable.rows);
    io.emit("update:contacts", updatedContactsTable.rows);
    io.emit("update:locations", updatedLocationsTable.rows);
    io.emit("update:quotes", updatedQuotesTable.rows);

    // Respond to the client.  used in postman to test api
    res.status(201).json({
      message: "Customers, companies, contacts, locations and quotes tables created successfully",
      customer_id,
    });
  } catch (err) {
    // Rollback the transaction on error to previous state
    await pool.query("ROLLBACK");
    console.error(err.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

// get customers table
app.get("/customers", async (req, res) => {
  try {
    const allCustomers = await pool.query("SELECT * FROM customers");
    // response shown in postman
    res.json(allCustomers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get companies table
app.get("/companies", async (req, res) => {
  try {
    const allCompanies = await pool.query("SELECT * FROM companies");
    res.json(allCompanies.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get contacts table
app.get("/contacts", async (req, res) => {
  try {
    const allContacts = await pool.query("SELECT * FROM contacts");
    res.json(allContacts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get locations table
app.get("/locations", async (req, res) => {
  try {
    const allLocations = await pool.query("SELECT * FROM locations");
    res.json(allLocations.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get quotes table
app.get("/quotes", async (req, res) => {
  try {
    const allQuotes = await pool.query("SELECT * FROM quotes");
    res.json(allQuotes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Put Route for Customers table
app.put("/customers/:id", async (req, res) => {
  const allowedColumns = [
    "company_name",
    "trading_name",
    "contact_name",
    "tel_number",
    "email",
    "merchant_id",
    "bank_number",
    "customer_status",
  ];

  try {
    // obtain the id from the request
    const { id } = req.params;
    // obtain the actual updates from request body
    const updates = req.body;
    console.log(updates);
    // run the updateRecord handler function with parameters
    const updatedCustomers = await updateRecord(
      "customers",
      allowedColumns,
      id,
      updates,
      pool,
      io
    );
    res.json(updatedCustomers);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
});

// PUT Route for companies table
app.put("/companies/:id", async (req, res) => {
  const allowedColumns = [
    "company_name",
    "category",
    "company_number",
    "company_user",
    "company_address",
    "customer_status",
  ];

  try {
    const { id } = req.params;
    const updates = req.body;
    console.log(updates);
    const updatedCompanies = await updateRecord(
      "companies",
      allowedColumns,
      id,
      updates,
      pool,
      io
    );
    res.json(updatedCompanies);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
});

// PUT Route for contacts table
app.put("/contacts/:id", async (req, res) => {
  const allowedColumns = [
    "company_name",
    "customer_status",
    "first_name",
    "last_name",
    "title",
    "position",
    "contact_number",
    "alternative_contact_number",
    "email",
    "nationality",
    "date_of_birth",
    "percentage_owned",
    "job_role",
    "address_1",
    "adress_2",
    "town_city",
    "postcode",
    "country",
    "years_at_current_address",
    "months_at_current_address",
  ];

  try {
    const { id } = req.params;
    const updates = req.body;
    console.log(updates);
    const updatedContacts = await updateRecord(
      "contacts",
      allowedColumns,
      id,
      updates,
      pool,
      io
    );
    res.json(updatedContacts);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
});

// PUT Route for locations table
app.put("/locations/:id", async (req, res) => {
  const allowedColumns = [
    "company_name",
    "customer_status",
    "trading_name",
    "address_1",
    "adress_2",
    "town_city",
    "postcode",
    "country",
    "contacts",
    "industry_type",
    "sector",
    "website",
    "bank_name",
    "account_name",
    "sort_code",
    "account_number",
    "total_card_turnover",
    "debit_card_turnover",
    "credit_card_turnover",
    "commercial_card_turnover",
    "average_transaction",
    "transaction_volume",
    "card_not_present",
    "total_annual_turnover"
  ];

  try {
    const { id } = req.params;
    const updates = req.body;
    console.log(updates);
    const updatedLocations = await updateRecord(
      "locations",
      allowedColumns,
      id,
      updates,
      pool,
      io
    );
    res.json(updatedLocations);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
});

// PUT Route for quotes table
app.put("/quotes/:id", async (req, res) => {
  const allowedColumns = [
    "company_name",
    "customer_status",
    "quote_type",
    "location_address",
    "settlement_time",
    "settlement_type",
    "visa_debit",
    "mastercard_debit",
    "visa_credit",
    "mastercard_credit",
    "visa_business_debit",
    "visa_commercial",
    "mastercard_commercial",
    "authorisation_fee",
    "mmsc",
    "amex",
    "terminal_type",
    "terminal_price",
    "terminal_term",
    "finance_provider"
  ];

  try {
    const { id } = req.params;
    const updates = req.body;
    console.log(updates);
    const updatedQuotes = await updateRecord(
      "quotes",
      allowedColumns,
      id,
      updates,
      pool,
      io
    );
    res.json(updatedQuotes);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
});

// delete api
app.delete("/customers/:id", async (req, res) => {
  try {
    // obtain the id from the request
    const { id } = req.params;
    // begin batch delete process
    await pool.query("BEGIN");

    // queries to delete the required rows from the companies and customers tables
    await pool.query("DELETE FROM companies WHERE customer_id = $1", [id]);
    await pool.query("DELETE FROM customers WHERE customer_id = $1", [id]); 
    await pool.query("DELETE FROM contacts WHERE customer_id = $1", [id]); 
    await pool.query("DELETE FROM locations WHERE customer_id = $1", [id]); 
    await pool.query("DELETE FROM quotes WHERE customer_id = $1", [id]); 

    await pool.query("COMMIT");

    // Emit delete events
    io.emit("delete:customers", { customer_id: id});
    io.emit("delete:companies", { customer_id: id});
    io.emit("delete:contacts", { customer_id: id});
    io.emit("delete:locations", { customer_id: id});
    io.emit("delete:quotes", { customer_id: id});

    // postman success message
    res.json(`Customer record with ID ${id} was deleted from all tables!`);
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error(err.message);
  }
});

// function to start the server
server.listen(5001, () => {
  console.log("server has started on port 5001");
});
