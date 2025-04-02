import React from "react";

function Locations({
  locationData,
  handleUpdate,
  handlePaste,
  tempText,
  rowColour

}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Trading Name</th>
          <th>Legal Name</th>
          <th>Address 1</th>
          <th>Address 2</th>
          <th>Town/City</th>
          <th>Postcode</th>
          <th>Country</th>
          <th>Contacts</th>
          <th>Industry Type</th>
          <th>Sector</th>
          <th>Website</th>
          <th>Bank Name</th>
          <th>Account Name</th>
          <th>Sort Code</th>
          <th>Account Number</th>
          <th>Total Card Turnover</th>
          <th>Debit Card Turnover</th>
          <th>Credit Card Turnover</th>
          <th>Commercial Card Turnover</th>
          <th>Average Transaction</th>
          <th>Transaction Volume</th>
          <th>Card Not Present</th>
          <th>Total Annual Turnover</th>
        </tr>
      </thead>
      <tbody>
        {locationData.map((location, index) => (
          <tr key={location.customer_id} className={rowColour(location.customer_status)}>
             <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].trading_name) ||
                  location.trading_name
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "trading_name", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "trading_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].company_name) ||
                  location.company_name
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "company_name", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "company_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].address_1) ||
                  location.address_1
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "address_1", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "address_1", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].address_2) ||
                  location.address_2
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "address_2", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "address_2", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].town_city) ||
                  location.town_city
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "town_city", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "town_city", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].postcode) ||
                  location.postcode
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "postcode", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "postcode", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].country) ||
                  location.country
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "country", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "country", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].contacts) ||
                  location.contacts
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "contacts", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "contacts", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].industry_type) ||
                  location.industry_type
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "industry_type", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "industry_type", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].sector) ||
                  location.sector
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "sector", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "sector", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].website) ||
                  location.website
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "website", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "website", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].bank_name) ||
                  location.bank_name
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "bank_name", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "bank_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].account_name) ||
                  location.account_name
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "account_name", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "account_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].sort_code) ||
                  location.sort_code
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "sort_code", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "sort_code", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].account_number) ||
                  location.account_number
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "account_number", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "account_number", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].total_card_turnover) ||
                  location.total_card_turnover
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "total_card_turnover", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "total_card_turnover", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].debit_card_turnover) ||
                  location.debit_card_turnover
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "debit_card_turnover", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "debit_card_turnover", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].credit_card_turnover) ||
                  location.credit_card_turnover
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "credit_card_turnover", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "credit_card_turnover", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].commercial_card_turnover) ||
                  location.commercial_card_turnover
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "commercial_card_turnover", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "commercial_card_turnover", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].average_transaction) ||
                  location.average_transaction
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "average_transaction", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "average_transaction", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].transaction_volume) ||
                  location.transaction_volume
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "transaction_volume", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "transaction_volume", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].card_not_present) ||
                  location.card_not_present
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "card_not_present", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "card_not_present", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[location.customer_id] && tempText[location.customer_id].total_annual_turnover) ||
                  location.total_annual_turnover
                }
                onChange={(e) =>
                  handleUpdate("locations", location.customer_id, "total_annual_turnover", e.target.value)
                }
                onPaste={(e) => handlePaste("locations", location.customer_id, "total_annual_turnover", e)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Locations;
   