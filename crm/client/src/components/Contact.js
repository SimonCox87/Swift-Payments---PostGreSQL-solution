import React from "react";

// Render the companies table
function Contact({
  contactData,
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Title</th>
          <th>Position</th>
          <th>Contact Number</th>
          <th>Alternative Contact Number</th>
          <th>Email</th>
          <th>Nationality</th>
          <th>Date of Birth</th>
          <th>Percentage Owned</th>
          <th>Job Role</th>
          <th>Address 1</th>
          <th>Address 2</th>
          <th>Town/City</th>
          <th>Postcode</th>
          <th>Country</th>
          <th>Years at current address</th>
          <th>Months at current address</th>
        </tr>
      </thead>
      <tbody>
        {contactData.map((contact, index) => (
          <tr key={contact.customer_id} className={rowColour(contact.customer_status)}>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].company_name) ||
                  contact.company_name
                }
                onChange={(e) =>
                  handleUpdate("contacts", contact.customer_id, "company_name", e.target.value)
                }
                onPaste={(e) => handlePaste("contacts", contact.customer_id, "company_name", e)}
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].first_name) ||
                  contact.first_name
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "first_name",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "first_name", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.cuustomer_id] && tempText[contact.customer_id].last_name) ||
                  contact.last_name
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "last_name",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "last_name", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].title) ||
                  contact.title
                }
                onChange={(e) =>
                  handleUpdate("contacts", contact.customer_id, "title", e.target.value)
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "title", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].position) ||
                  contact.position
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "position",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "position", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].contact_number) ||
                  contact.contact_number
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.contact_number,
                    "contact_number",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "contact_number", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].alternative_contact_number) ||
                  contact.alternative_contact_number
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "alternative_contact_number",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "alternative_contact_number", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].email) ||
                  contact.position
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "email",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "email", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].nationality) ||
                  contact.nationality
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "nationality",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "nationality", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].date_of_birth) ||
                  contact.date_of_birth
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.date_of_birth,
                    "date_of_birth",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "date_of_birth", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].percentage_owned) ||
                  contact.pospercentage_owned
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "percentage_owned",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "percentage_owned", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].job_role) ||
                  contact.job_role
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "job_role",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "job_role", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].address_1) ||
                  contact.address_1
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.address_1,
                    "address_1",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "address_1", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].address_2) ||
                  contact.address_2
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "address_2",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "address_2", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].town_city) ||
                  contact.town_city
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "town_city",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "town_city", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].postcode) ||
                  contact.postcode
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "postcode",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "postcode", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].country) ||
                  contact.country
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "country",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "country", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].years_at_current_address) ||
                  contact.years_at_current_address
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "years_at_current_address",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "years_at_current_address", e)
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={
                  (tempText[contact.customer_id] && tempText[contact.customer_id].months_at_current_address) ||
                  contact.months_at_current_address
                }
                onChange={(e) =>
                  handleUpdate(
                    "contacts",
                    contact.customer_id,
                    "months_at_current_address",
                    e.target.value
                  )
                }
                onPaste={(e) =>
                  handlePaste("contacts", contact.customer_id, "months_at_current_address", e)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Contact;
