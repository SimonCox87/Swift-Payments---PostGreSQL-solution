import React from "react";

// Render the companies table
function Companies({
  quoteData,
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
          <th>Quote Type</th>
          <th>Location Address</th>
          <th>Settlement Time</th>
          <th>Settlement Type</th>
          <th>Visa Debit</th>
          <th>Mastercard Debit</th>
          <th>Mastercard Credit</th>
          <th>Visa Credit</th>
          <th>Visa Business Debit</th>
          <th>Visa Commercial</th>
          <th>Mastercard Commercial</th>
          <th>Authorisation Fee</th>
          <th>MMSC</th>
          <th>AMEX</th>
          <th>Termincal Type</th>
          <th>Terminal Price</th>
          <th>Termincal Term</th>
          <th>Finance Provider</th>
        </tr>
      </thead>
      <tbody>
        {quoteData.map((quote, index) => (
          <tr key={quote.customer_id} className={rowColour(quote.customer_status)}>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].company_name) ||
                  quote.company_name
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "company_name", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "company_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].quote_type) ||
                  quote.quote_type
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "quote_type", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "quote_type", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].location_address) ||
                  quote.location_address
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "location_address", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "location_address", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].settlement_time) ||
                  quote.settlement_time
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "settlement_time", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "settlement_time", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].settlement_type) ||
                  quote.settlement_type
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "settlement_type", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "settlement_type", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].visa_debit) ||
                  quote.visa_debit
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "visa_debit", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "visa_debit", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].mastercard_debit) ||
                  quote.mastercard_debit
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "mastercard_debit", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "mastercard_debit", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].visa_credit) ||
                  quote.visa_credit
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "visa_credit", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "visa_credit", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].mastercard_credit) ||
                  quote.mastercard_credit
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "mastercard_credit", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "mastercard_credit", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].visa_business_debit) ||
                  quote.visa_business_debit
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "visa_business_debit", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "visa_business_debit", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].visa_commercial) ||
                  quote.visa_commercial
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "visa_commercial", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "visa_commercial", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].mastercard_commercial) ||
                  quote.mastercard_commercial
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "mastercard_commercial", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "mastercard_commercial", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].authorisation_fee) ||
                  quote.authorisation_fee
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "authorisation_fee", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "authorisation_fee", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].mmsc) ||
                  quote.mmsc
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "mmsc", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "mmsc", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].amex) ||
                  quote.amex
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "amex", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "amex", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].terminal_type) ||
                  quote.terminal_type
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "terminal_type", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "terminal_type", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].terminal_price) ||
                  quote.terminal_price
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "terminal_price", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "terminal_price", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].terminal_term) ||
                  quote.terminal_term
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "terminal_term", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "terminal_term", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[quote.customer_id] && tempText[quote.customer_id].finance_provider) ||
                  quote.finance_provider
                }
                onChange={(e) =>
                  handleUpdate("quotes", quote.customer_id, "finance_provider", e.target.value)
                }
                onPaste={(e) => handlePaste("quotes", quote.customer_id, "finance_provider", e)}
              />
            </td>            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Companies;
