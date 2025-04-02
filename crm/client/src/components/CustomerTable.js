import React from "react";
import CompaniesModal from "./Modals/CompaniesModal";

// Function that renders the CustomerTable Component.
// The parameters of the CustomerTable are the props for the component handed down from App.js
function CustomerTable({
  customerData,
  selectId,
  handleUpdate,
  handlePaste,
  rowColour,
  customerId,
  filterStatus,
  tempText,
  amend,
  setFilterStatus,
  companyData
  
}) 
 
{
   // useEffect to determine whether the modal is open or not
   const [companyModalOpen, setCompanyModalOpen] = React.useState(false);
   const [companyModalData, setCompanyModalData] = React.useState(null);

   // function to see whether handleKeyDown event listener has been triggered.  If enter key is
   // pressed companyModalOpen is set to true
   const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      setCompanyModalOpen(true);
      setCompanyModalData(index); 
    }
   }

  // Table is returned by this function.
  // Create the table headers
  // We loop through customerData (derived from filteredCustomerData) to populate table rows
  // Each cell of the table contains data and a function that triggers when data is amended.
  // Also styling is applied to table rows to determine colouring based on status.

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Deal Type</th>
            <th>Locations</th>
            <th>Contacts</th>
            <th>Live Date</th>
            <th>Expiry Date</th>
            <th>Company Name</th>
            <th>
              Customer Status
              <select
                id="statusFilter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Live">Live</option>
                <option value="Application">Application</option>
                <option value="Declined">Declined</option>
                <option value="Prospect">Prospect</option>
              </select>
            </th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (
            <tr
              key={customer.customer_id}
              className={rowColour(customer.customer_status)}
              style={{
                backgroundColor:
                  customer.customer_id === customerId && "RGB(200, 162, 200)",
                opacity: 0.66,
              }}
            >
              <td>
                <input
                  type="text"
                  value={
                    (tempText[customer.customer_id] &&
                      tempText[customer.customer_id].deal_type) ||
                    customer.deal_type
                  }
                  onChange={(e) =>
                    handleUpdate(
                      "customers",
                      customer.customer_id,
                      "deal_type",
                      e.target.value
                    )
                  }
                  onPaste={(e) =>
                    handlePaste("customers", customer.customer_id, "deal_type", e)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={
                    (tempText[customer.customer_id] &&
                      tempText[customer.customer_id].locations) ||
                    customer.locations
                  }
                  onChange={(e) =>
                    handleUpdate(
                      "customers",
                      customer.customer_id,
                      "locations",
                      e.target.value
                    )
                  }
                  onPaste={(e) =>
                    handlePaste("customers", customer.customer_id, "locations", e)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={
                    (tempText[customer.customer_id] &&
                      tempText[customer.customer_id].contacts) ||
                    customer.contacts
                  }
                  onChange={(e) =>
                    handleUpdate(
                      "customers",
                      customer.customer_id,
                      "contacts",
                      e.target.value
                    )
                  }
                  onPaste={(e) =>
                    handlePaste("customers", customer.customer_id, "contacts", e)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={
                    (tempText[customer.customer_id] && tempText[customer.customer_id].live_date) ||
                    customer.live_date
                  }
                  onChange={(e) =>
                    handleUpdate(
                      "customers",
                      customer.customer_id,
                      "live_date",
                      e.target.value
                    )
                  }
                  onPaste={(e) =>
                    handlePaste("customers", customer.customer_id, "live_date", e)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={
                    (tempText[customer.customer_id] && tempText[customer.customer_id].expiry) ||
                    customer.expiry
                  }
                  onChange={(e) =>
                    handleUpdate(
                      "customers",
                      customer.customer_id,
                      "expiry",
                      e.target.value
                    )
                  }
                  onPaste={(e) =>
                    handlePaste("customers", customer.customer_id, "expiry", e)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={
                    (tempText[customer.customer_id] && tempText[customer.customer_id].company_name) ||
                    customer.company_name
                  }
                  onKeyDown={(e) => handleKeyDown(e,companyData[index])}
                  onChange={(e) =>
                    handleUpdate(
                      "customers",
                      customer.customer_id,
                      "company_name",
                      e.target.value
                    )
                  }
                  onPaste={(e) =>
                    handlePaste("customers", customer.customer_id, "company_name", e)
                  }
                />
              </td>
              <td>
                <select
                  id="status"
                  name="status"
                  value={
                    (tempText[customer.customer_id] && tempText[customer.customer_id].customer_status) ||
                    customer.customer_status
                  }
                  onChange={(e) => {
                    e.target.value !== "placeholder" &&
                      amend("customers", customer.customer_id, "customer_status", e.target.value);
                  }}
                >
                  <option value="placeholder">status...</option>
                  <option value="Live">Live</option>
                  <option value="Application">Application</option>
                  <option value="Declined">Declined</option>
                  <option value="Prospect">Prospect</option>
                </select>
              </td>
              <td>
                <input
                  type="radio"
                  name="customer"
                  onClick={() => selectId(customer.customer_id)}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {companyModalOpen && <CompaniesModal 
        onClose={() => setCompanyModalOpen(false)} 
        modalData={companyModalData}
        handleUpdate={handleUpdate}
        handlePaste={handlePaste}
        rowColour={rowColour}
        tempText={tempText}
      />}
    </div>
  );
  
}

export default CustomerTable;
