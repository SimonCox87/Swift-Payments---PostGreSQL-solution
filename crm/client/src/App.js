// import of the following code from react and firestore modules.  CustomerTable and Companies are our table components
import React, { useEffect } from "react";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";
import CustomerTable from "./components/CustomerTable";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Locations from "./components/Locations";
import socket from "./socket.js";

// Create our main App function, which holds our data, functions and basic html structure for our
// components.  Also returns jsx for our app.
function App() {
  // React use States.  Contain an array and a setter function.  When these states are changed using their
  // prescribed setting functions Reacts DOM is updated causing re-render of page to reflect change in state.  Essentially when
  // the data is changed the webpage and it's underlying components will be altered to reflect this change.
  const [customerData, setCustomerData] = React.useState([]);
  const [companyData, setCompanyData] = React.useState([]);
  const [filteredCustomerData, setFilteredCustomerData] = React.useState([]);
  const [filteredCompanyData, setFilteredCompanyData] = React.useState([]);
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
      const response = await fetch(`http://localhost:5000/${table}`);
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
      }
    } catch (err) {
      console.error(`Error fetching table data: ${err.message}`);
    }
  };

  // useEffect to load the customers and companies tables on initial load of the site.
  useEffect(() => {
    getTable("customers");
    getTable("companies");
  }, []);

  // useEffect listener function to communicate with customers table in our database
  useEffect(() => {
    // Listener for customer updates
    socket.on("update:customers", (updatedCustomer) => {

      console.log("Socket on!!!")

      // If the server sends the entire list of customers meaning the user has added
      // a new customer table is re-rendered using getTable() function.
      if (Array.isArray(updatedCustomer)) {
        getTable("customers");
      // Else if there are only updates made to existing customer data reflect this
      // change by updating the customerData state variable. 
      } else {
        setCustomerData((prev) =>
          prev.map((cust) =>
            cust.customer_id === updatedCustomer.customer_id
              ? updatedCustomer
              : cust
          )
        );
      }
    });

    // Listener for customer deletions
    socket.on("delete:customers", (deletedCustomer) => {
      // update customerData state by using filter method to update array
      setCustomerData((prev) =>
        prev.filter((cust) => cust.customer_id !== deletedCustomer.customer_id)
      );
    });

    // Clean up the listeners when the component unmounts
    return () => {
      socket.off("update:customers");
      socket.off("delete:customers");
    };
  }, []);

  // useEffect listener function to communicate with customers table in our database
  useEffect(() => {
    // Listener for company updates
    socket.on("update:companies", (updatedCompany) => {
      console.log("Socket on!!")

      if (Array.isArray(updatedCompany)) {
        getTable("companies");
      } else {
        setCompanyData((prev) =>
          prev.map((company) =>
            company.customer_id === updatedCompany.customer_id
              ? updatedCompany
              : company
          )
        );
      }
    });

    // Listener for customer deletions
    socket.on("delete:companies", (deletedCompany) => {

      setCompanyData((prev) =>
        prev.filter(
          (company) => company.customer_id !== deletedCompany.customer_id
        )
      );
    });
    // Clean up the listeners when the component unmounts
    return () => {
      socket.off("update:companies");
      socket.off("delete:companies");
    };
  }, []);

  // Ensure that tables remain filtered using useEffect
  React.useEffect(() => {
    setFilteredCustomerData(
      filterStatus === "All"
        ? customerData
        : customerData.filter(
            (customer) => customer.customer_status === filterStatus
          )
    );
  }, [customerData, filterStatus]);

  React.useEffect(() => {
    setFilteredCompanyData(
      filterStatus === "All"
        ? companyData
        : companyData.filter(
            (company) => company.customer_status === filterStatus
          )
    );
  }, [companyData, filterStatus]);

  // React useEffect that syncs up companies and customers databases when changes are made
  // to the customers database
  React.useEffect(() => {
    // guard clause in case customerData and companyData do not exist or if the two
    // arrays are of unequal length.  If this is not in place this useEffect will break the website.
    // This is particularly the case if you delete all the data.
    if (
      !customerData ||
      !companyData ||
      customerData.length !== companyData.length
    ) {
      return;
    }

    // for loop to amend companies table in line with changes made to customer_name
    // and customer_status in the customers table
    for (let i = 0; i < customerData.length; i++) {
      if (
        companyData[i].company_name !==
        `${customerData[i].customer_name} test${i+1}`
      ) {
        amend(
          "companies",
          companyData[i].customer_id,
          "company_name",
          `${customerData[i].customer_name} test${i+1}`
        );
      }
      if (customerData[i].customer_status !== companyData[i].customer_status) {
        amend(
          "companies",
          companyData[i].customer_id,
          "customer_status",
          customerData[i].customer_status
        );
      }
    }
  }, [customerData, companyData]);

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
      await fetch(`http://localhost:5000/customers/${id}`, {
        method: "DELETE",
      });

      setCustomerData(
        customerData.filter((customer) => customer.customer_id !== id)
      );
      setCompanyData(
        companyData.filter((company) => company.customer_id !== id)
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
    try {
      await fetch("http://localhost:5000/customers/", {
        method: "POST",
      });
    } catch (err) {
      console.error(`Error adding customer: ${err.message}`);
    }
  }

  // Function to amend existing customer data.
  async function amend(table, id, column, value) {
    try {
      const body = { [column]: value };
      await fetch(`http://localhost:5000/${table}/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
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
      amend(table, id, column, value); // Update Firestore
    }, 300); // 300ms debounce time
  };

  // Function to handle input changes and store them in tempText
  const handleUpdate = (table, id, column, value) => {
    setTempText((prev) => ({
      ...prev,
      [id]: {
        ...prev[id], // Initialize `id` if it doesn't exist
        [column]: value,
      },
    }));

    // Debounce the actual update to Firestore
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
    Contact: <Contact />,
    Locations: <Locations />,
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

  // Tasks to complete
  // 5 - Create Docker compose file to run the client,server and postgres as a cluster.  Need to make a decistion as to
  //     whether it is best to install postgres globally or to have it installed in a container.

  console.log(process.env.REACT_APP_SOCKET_URL);

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
