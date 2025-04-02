import React from "react";

// Render the companies table
function Companies({
  companyData,
  handleUpdate,
  handlePaste,
  tempText,
  rowColour,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Legal Name</th>
          <th>Entity Type</th>
          <th>Contacts</th>
          <th>Deals</th>
          <th>Locations</th>
          <th>Quotes</th>
          <th>Registered Number</th>
          <th>Date Commenced Trading</th>
          <th>Postcode</th>
        </tr>
      </thead>
      <tbody>
        {companyData.map((company, index) => (
          <tr key={company.customer_id} className={rowColour(company.customer_status)}>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].company_name) ||
                  company.company_name
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "company_name",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "company_name", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].entity_type) ||
                  company.entity_type
                }
                onChange={(e) =>
                  handleUpdate("companies", company.customer_id, "entity_type", e.target.value)
                }
                onPaste={(e) => handlePaste("companies", company.customer_id, "entity_type", e)}
              />
            </td>
         
            <td>
              <input
                type="text"
                value={
                  (tempText[company.cuustomer_id] && tempText[company.customer_id].contact) ||
                  company.contact
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "contact",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "contact", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].deals) ||
                  company.deals
                }
                onChange={(e) =>
                  handleUpdate("companies", company.customer_id, "deals", e.target.value)
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "deals", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].locations) ||
                  company.locations
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "locations",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "locations", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].quotes) ||
                  company.quotes
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "quotes",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "quotes", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].registered_number) ||
                  company.registered_number
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "registered_number",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "registered_number", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].date_commenced_trading) ||
                  company.date_commenced_trading
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "date_commenced_trading",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "date_commenced_trading", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].postcode) ||
                  company.postcode
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "postcode",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "postcode", e)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Companies;
