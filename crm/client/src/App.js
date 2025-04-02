// import of the following code from react and firestore modules.  CustomerTable and Companies are our table components
import React, { useEffect } from "react";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";
import CustomerTable from "./components/CustomerTable";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Locations from "./components/Locations";
import Quotes from "./components/Quotes.js"
import socket from "./socket.js";
import useTableSocket from "./hooks/tableSocket.js";
import useFilterTables from "./hooks/filterTables.js";

// Create our main App functiEngon, which holds our data, functions and basic html structure for our
// components.  Also returns jsx for our app.
function App() {
  // React use States.  Contain an array and a setter function.  When these states are changed using their
  // prescribed setting functions Reacts DOM is updated causing re-render of page to reflect change in state.  Essentially when
  // the data is changed the webpage and it's underlying components will be altered to reflect this change.
  const [customerData, setCustomerData] = React.useState([]);
  const [companyData, setCompanyData] = React.useState([]);
  const [contactData, setContactData] = React.useState([]);
  const [locationData, setLocationData] = React.useState([]);
  const [quoteData, setQuoteData] = React.useState([]);
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [filteredCustomerData, setFilteredCustomerData] = React.useState([]);
  const [filteredCompanyData, setFilteredCompanyData] = React.useState([]);
  const [filteredContactData, setFilteredContactData] = React.useState([]);
  const [filteredLocationData, setFilteredLocationData] = React.useState([]);
  const [filteredQuoteData, setFilteredQuoteData] = React.useState([]);
  const [filterStatus, setFilterStatus] = React.useState("All");
  const [tempText, setTempText] = React.useState({});
  const [page, setPage] = React.useState(null);

  // React use References.  For values that persist between renders.  We use these so that when the values of these
  // references changes a re-render of the page is not triggered making for a more performant web page.
  const debounceTimeoutsRef = React.useRef({});
  const customerIdRef = React.useRef(null);

  // function to get customers table - calls out get api defined in crm/server/index.js
  const getTable = async (table) => {
    try {
      // try to call get api.
      const response = await fetch(`http://localhost:5001/${table}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${table} data`);
      }
      // get the table data from the response
      const jsonData = await response.json();
      // sort the data by when it was created
      const sortedJson = jsonData.sort((a, b) => a.created - b.created);

      // set the customerData and companyData states
      if (table === "customers") {
        setCustomerData(sortedJson);
      } else if (table === "companies") {
        setCompanyData(sortedJson);
      } else if (table === "contacts") {
        setContactData(sortedJson);
      } else if (table === "locations") {
        setLocationData(sortedJson);
      } else if (table === "quotes") {
        setQuoteData(sortedJson);
      }
    } catch (err) {
      console.error(`Error fetching table data: ${err.message}`);
    }
  };

  // useEffect to load the customers and companies tables on initial load of the site.
  useEffect(() => {
    const loadTables = async () => {
      const tables = ["customers", "companies", "contacts", "locations", "quotes"];
      await Promise.all(tables.map((table) => getTable(table)));
      setDataLoaded(true);
    }
    loadTables()
  }, []);

  // useEffects to enable socket event listeners for updating and deleting data from the tables
  // covert the below calls into a forEach loop.  I think that this might be more in accordance with the React style.
  useTableSocket(socket, "customers", setCustomerData, getTable, dataLoaded);
  useTableSocket(socket, "companies", setCompanyData, getTable, dataLoaded);
  useTableSocket(socket, "contacts", setContactData, getTable, dataLoaded);
  useTableSocket(socket, "locations", setLocationData, getTable, dataLoaded);
  useTableSocket(socket, "quotes", setQuoteData, getTable, dataLoaded);

  // useEffects to ensure that tables remain filtered using useEffect
  useFilterTables(customerData, setFilteredCustomerData, filterStatus, dataLoaded);
  useFilterTables(companyData, setFilteredCompanyData, filterStatus, dataLoaded);
  useFilterTables(contactData, setFilteredContactData, filterStatus, dataLoaded);
  useFilterTables(locationData, setFilteredLocationData, filterStatus, dataLoaded);
  useFilterTables(quoteData, setFilteredQuoteData, filterStatus, dataLoaded);
    
  // Select customer ID.  Radio button handler function
  function selectId(id) {
    customerIdRef.current = id;
  }

  // Delete function to remove customer record from the database
  async function del(id) {
    id = customerIdRef.current;

    // Error handling pop up which informs the user that they have not
    // selected a customer record to delete. 
    if (!id) {
      alert("Please select a customer to delete.")
      return;
    }

    // call delete api
    try {
      await fetch(`http://localhost:5001/customers/${id}`, {
        method: "DELETE",
      });

      // Put this into a table and then run a loop over it.  e.g.
      // [customerData, ... ,quoteData].forEach((table) => table.filter((i) => i.table.customer_id !== id))

      setCustomerData(
        customerData.filter((customer) => customer.customer_id !== id)
      );
      setCompanyData(
        companyData.filter((company) => company.customer_id !== id)
      );
      setContactData (
        contactData.filter((contact) => contact.customer_id !== id)
      );
      setLocationData (
        locationData.filter((location) => location.customer_id !== id)
      );
      setQuoteData (
        quoteData.filter((quote) => quote.customer_id !== id)
      );

    } catch (err) {
      console.error(`Error deleting customer: ${err.message}`);
    } finally {
      // finally block ensures that this code runs no matter whether an error has
      // occurred or not.  resets selected customerId.
      customerIdRef.current = null;
    }
  }

  // Function to add new customer record to the database.  Ready for the user to add the data
  async function add() {
    setDataLoaded(false);
    try {
      await fetch("http://localhost:5001/customers/", {
        method: "POST",
      });
      await Promise.all([
        getTable("customers"),
        getTable("companies"),
        getTable("contacts"),
        getTable("locations"),
        getTable("quotes")
      ]);

      setDataLoaded(true);
    } catch (err) {
      console.error(`Error adding customer: ${err.message}`);
    }
  }

  // Function to amend existing customer data.
  async function amend(table, id, column, value) {
    setDataLoaded(false);
    try {
      const body = { [column]: value };
      await fetch(`http://localhost:5001/${table}/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      await Promise.all([
        getTable("customers"),
        getTable("companies"),
        getTable("contacts"),
        getTable("locations"),
        getTable("quotes")
      ]);
      setDataLoaded(true);
    } catch (err) {
      console.error(`Error updating document: ${err.message}`);
    }
  }

  // Function to debounce the field update
  const debounceUpdate = (table, id, column, value) => {
    if (debounceTimeoutsRef.current[id]) {
      //cancels previously set timeout with the same id
      clearTimeout(debounceTimeoutsRef.current[id]); 
    }

    // Set a new timeout for database update
    debounceTimeoutsRef.current[id] = setTimeout(() => {
      amend(table, id, column, value); // Update Database
    }, 300); // 300ms debounce time
  };

  // Function to handle input changes and store them in tempText
  const handleUpdate = (table, id, column, value) => {
    setTempText((prev) => ({
      ...prev,
      [id]: {
        ...prev[id], // Initialise `id` if it doesn't exist
        [column]: value,
      },
    }));

    // Debounce the actual update to database
    debounceUpdate(table, id, column, value);
  };

  // Paste handler function (for handling pasted text)
  const handlePaste = (table, id, field, event) => {
    event.preventDefault(); // Prevent default paste behavior

    // Safely get the pasted value
    const pastedValue =
      // access event clipboard data
      (event.clipboardData && event.clipboardData.getData("text")) || "";

    // Update the input with the pasted value
    amend(table, id, field, pastedValue);
  };

  // Map object containing possible statuses and their corresponding css classes
  const rowColourMap = {
    Declined: "row-declined",
    Live: "row-live",
    Application: "row-application",
    Prospect: "row-prospect",
  };

  // Function to determine the colouring of table rows based on customer status
  function rowColour(status) {
    return rowColourMap[status];
  }

  // Create a dictionary object that contains all of our components and their
  // corresponding props. 
  const componentMap = {
    Companies: (
      <Companies
        companyData={filteredCompanyData}
        handleUpdate={handleUpdate}
        handlePaste={handlePaste}
        tempText={tempText}
        rowColour={rowColour}
      />
    ),
    Contact: (
      <Contact
        contactData={filteredContactData}
        handleUpdate={handleUpdate}
        handlePaste={handlePaste}
        tempText={tempText}
        rowColour={rowColour}
      />
    ),
    Locations: (
      <Locations 
        locationData={filteredLocationData}
        handleUpdate={handleUpdate}
        handlePaste={handlePaste}
        tempText={tempText}
        rowColour={rowColour}
      />
    ),
    Quotes : (
      <Quotes 
        quoteData={filteredQuoteData}
        handleUpdate={handleUpdate}
        handlePaste={handlePaste}
        tempText={tempText}
        rowColour={rowColour}
      />
    ),
    Deals: (
      <CustomerTable
        customerData={filteredCustomerData}
        selectId={selectId}
        handleUpdate={handleUpdate}
        handlePaste={handlePaste}
        rowColour={rowColour}
        customerId={customerIdRef}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        tempText={tempText}
        amend={amend}
        page={page}
        companyData={filteredCompanyData}
      />
    ),
  };

  // Function to render the different tables.  This function is executed in the return statement below.
  // In the return statement the function receives the page state as a parameter.
  function renderPage(table) {
    return componentMap[table] || componentMap["Deals"];
  }
  // Below elements are returned by app function.
  // 1. The TableHeader component is returned and its props are defined and passed to the component.
  // 2. The CustomerTable component is returned and its props are defined and passed to the component.

  return (
    <div>
      <Header setPage={setPage} page={page} />
      <TableHeader
        filterStatus={filterStatus}
        add={add}
        del={del}
        page={page}
        id={customerIdRef.current}
      />
      {renderPage(page)}
    </div>
  );
}

export default App;
