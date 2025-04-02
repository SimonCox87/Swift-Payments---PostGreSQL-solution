// //Post Calls
// // Post call for companies
// app.post("/companies", async (req,res) => {
//     try {
//         const newCompany = await pool.query(
//             "INSERT INTO companies DEFAULT VALUES RETURNING customer_id, customer_status, created"
//         );

//         const customer_id = newCompany.rows[0].customer_id;

//         res.status(201).json({
//             message: "New row in companies table created successfully",
//             customer_id
//         });

//     } catch (err) {
//         await pool.query("ROLLBACK");
//         console.error(err.message);
//         res.status(500).json({error: "An error occurred"});
//     }
// });

// // Post call for customers
// app.post("/customers", async (req, res) => {
//     try {
//         const newCustomer = await pool.query(
//             "INSERT INTO customers DEFAULT VALUES RETURNING customer_id, customer_status, created"
//         );

//         const customer_id = newCustomer.rows[0].customer_id;

//         res.status(201).json({
//             message: "New row in customers table created successfully",
//             customer_id
//         });

//     } catch (err) {
//         await pool.query("ROLLBACK");
//         console.error(err.message);
//         res.status(500).json({error: "An error occurred"});
//     }
// });

// // Post call for contacts
// app.post("/contacts", async (req, res) => {
//     try {
//         const newContact = await pool.query(
//             "INSERT INTO contacts DEFAULT VALUES RETURNING customer_id, customer_status, created"
//         );

//         const customer_id = newContact.rows[0].customer_id;

//         res.status(201).json({
//             message: "New row in contacts table created successfully",
//             customer_id
//         });

//     } catch (err) {
//         await pool.query("ROLLBACK");
//         console.error(err.message);
//         res.status(500).json({error: "An error occurred"});
//     }
// });

// // Post call for locations
// app.post("/locations", async (req, res) => {
//     try {
//         const newLocation = await pool.query(
//             "INSERT INTO locations DEFAULT VALUES RETURNING customer_id, customer_status, created"
//         );

//         const customer_id = newLocation.rows[0].customer_id;

//         res.status(201).json({
//             message: "New row in locations table created successfully",
//             customer_id
//         });

//     } catch (err) {
//         await pool.query("ROLLBACK");
//         console.error(err.message);
//         res.status(500).json({error: "An error occurred"});
//     }
// });

// // Post call for quotes
// app.post("/quotes", async (req, res) => {
//     try {
//         const newQuote = await pool.query(
//             "INSERT INTO quotes DEFAULT VALUES RETURNING customer_id, customer_status, created"
//         );

//         const customer_id = newQuote.rows[0].customer_id;

//         res.status(201).json({
//             message: "New row in quotes table created successfully",
//             customer_id
//         });

//     } catch (err) {
//         await pool.query("ROLLBACK");
//         console.error(err.message);
//         res.status(500).json({error: "An error occurred"});
//     }
// });


// // Delete Calls
// // Delete Call for companies
// app.delete("companies/:id", async (req,res) => {
//     try {
//         const {id} = req.params;
//          // begin batch delete process
//     await pool.query("BEGIN");

//     // queries to delete the required rows from the companies and customers tables
//     await pool.query("DELETE FROM companies WHERE customer_id = $1", [id]);
//     await pool.query("DELETE FROM customers WHERE customer_id = $1", [id]); 
//     await pool.query("DELETE FROM contacts WHERE customer_id = $1", [id]); 
//     await pool.query("DELETE FROM locations WHERE customer_id = $1", [id]); 
//     await pool.query("DELETE FROM quotes WHERE customer_id = $1", [id]); 

//     await pool.query("COMMIT");

//     // Emit delete events
//     io.emit("delete:customers", { customer_id: id});
//     io.emit("delete:companies", { customer_id: id});
//     io.emit("delete:contacts", { customer_id: id});
//     io.emit("delete:locations", { customer_id: id});
//     io.emit("delete:quotes", { customer_id: id});

//     // postman success message
//     res.json(`Customer record with ID ${id} was deleted from all tables!`);
//   } catch (err) {
//     await pool.query("ROLLBACK");
//     console.error(err.message);
//   }
// });

