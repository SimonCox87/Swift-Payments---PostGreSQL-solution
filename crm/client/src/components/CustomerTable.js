import React from "react";

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
  setFilterStatus
  
}) {
  // Table is returned by this function.
  // Create the table headers
  // We loop through customerData (derived from filteredCustomerData) to populate table rows
  // Each cell of the table contains data and a function that triggers when data is amended.
  // Also styling is applied to table rows to determine colouring based on status.

  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Trading Name</th>
          <th>Contact Name</th>
          <th>Telephone Number</th>
          <th>Email</th>
          <th>Merchant ID (MID)</th>
          <th>Bank Account Number</th>
          <th>
            Status
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
                    tempText[customer.customer_id].customer_name) ||
                  customer.customer_name
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "customer_name",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "customer_name", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[customer.customer_id] &&
                    tempText[customer.customer_id].trading_name) ||
                  customer.trading_name
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "trading_name",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "trading_name", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[customer.customer_id] &&
                    tempText[customer.customer_id].contact_name) ||
                  customer.contact_name
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "contact_name",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "contact_name", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[customer.customer_id] && tempText[customer.customer_id].tel_number) ||
                  customer.tel_number
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "tel_number",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "tel_number", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[customer.customer_id] && tempText[customer.customer_id].email) ||
                  customer.email
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "email",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "email", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[customer.customer_id] && tempText[customer.customer_id].merchant_id) ||
                  customer.merchant_id
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "merchant_id",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "merchant_id", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[customer.customer_id] && tempText[customer.customer_id].bank_number) ||
                  customer.bank_number
                }
                onChange={(e) =>
                  handleUpdate(
                    "customers",
                    customer.customer_id,
                    "bank_number",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("customers", customer.customer_id, "bank_number", e)
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
  );
}

export default CustomerTable;
