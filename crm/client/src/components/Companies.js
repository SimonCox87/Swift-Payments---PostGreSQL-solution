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
          <th>Name</th>
          <th>Category</th>
          <th>Number</th>
          <th>User</th>
          <th>Address</th>
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
                  handleUpdate("companies", company.customer_id, "company_name", e.target.value)
                }
                onPaste={(e) => handlePaste("companies", company.customer_id, "company_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].category) ||
                  company.category
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "category",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "category", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.cuustomer_id] && tempText[company.customer_id].company_number) ||
                  company.company_number
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "company_number",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "company_number", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].company_user) ||
                  company.company_user
                }
                onChange={(e) =>
                  handleUpdate("companies", company.customer_id, "company_user", e.target.value)
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "company_user", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[company.customer_id] && tempText[company.customer_id].company_address) ||
                  company.company_address
                }
                onChange={(e) =>
                  handleUpdate(
                    "companies",
                    company.customer_id,
                    "company_address",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("companies", company.customer_id, "company_address", e)
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
