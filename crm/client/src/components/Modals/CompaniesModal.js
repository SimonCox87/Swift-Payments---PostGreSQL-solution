import React from "react";

function CompaniesModal({ 
    onClose, 
    modalData,
    handleUpdate,
    handlePaste,
    rowColour,
    tempText
})
{
    console.log("Rendering Modal Component:", {
        customerId: modalData.customer_id,
        tempTextValue: tempText[modalData.customer_id]?.company_name,
        modalDataValue: modalData.company_name
      });
      
   
    return (   
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={onClose}>
                &times;
            </span>
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
                        <th>Registered Address 1</th>
                        <th>Registered Address 2</th>                        
                        <th>City</th>
                        <th>Postcode</th>    
                        <th>SIC Code</th>
                        <th>Country</th>
                        <th>Alternative Correspondence Address 1</th>
                        <th>Alternative Correspondence Address 2</th>
                        <th>Alternative Town</th>
                        <th>Alternative Postcode</th>
                        <th>Alternative Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={modalData.customer_id} className={rowColour(modalData.customer_status)}>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.company_name === undefined 
                                    ? modalData.company_name
                                    : tempText[modalData.customer_id].company_name
                                }
                                onChange={(e) =>
                                    handleUpdate(
                                        "companies",
                                        modalData.customer_id,
                                        "company_name",
                                        e.target.value
                                    )
                                }
                                onPaste={(e) =>
                                    handlePaste("companies", modalData.customer_id, "company_name", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.entity_type === undefined 
                                    ? modalData.entity_type
                                    : tempText[modalData.customer_id].entity_type
                                }
                                onChange={(e) =>
                                    handleUpdate("companies", modalData.customer_id, "entity_type", e.target.value)
                                }
                                onPaste={(e) => handlePaste("companies", modalData.customer_id, "entity_type", e)}
                            />
                            </td>
                        
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.contact === undefined 
                                    ? modalData.contact
                                    : tempText[modalData.customer_id].contact
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "contact",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "contact", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.deals === undefined 
                                    ? modalData.deals
                                    : tempText[modalData.customer_id].deals
                                }
                                onChange={(e) =>
                                handleUpdate("companies", modalData.customer_id, "deals", e.target.value)
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "deals", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.locations === undefined 
                                    ? modalData.locations
                                    : tempText[modalData.customer_id].locations
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "locations",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "locations", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.quotes === undefined 
                                    ? modalData.quotes
                                    : tempText[modalData.customer_id].quotes
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "quotes",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "quotes", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.registered_number === undefined 
                                    ? modalData.registered_number
                                    : tempText[modalData.customer_id].registered_number
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "registered_number",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "registered_number", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.vat_number === undefined 
                                    ? modalData.vat_number
                                    : tempText[modalData.customer_id].vat_number
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "vat_number",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "vat_number", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.date_commenced_trading === undefined 
                                    ? modalData.date_commenced_trading
                                    : tempText[modalData.customer_id].date_commenced_trading
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "date_commenced_trading",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "date_commenced_trading", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.registered_address_1 === undefined 
                                    ? modalData.registered_address_1
                                    : tempText[modalData.customer_id].registered_address_1
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "registered_address_1",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "registered_address_1", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.registered_address_2 === undefined 
                                    ? modalData.registered_address_2
                                    : tempText[modalData.customer_id].registered_address_2
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "registered_address_2",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "registered_address_2", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.city === undefined 
                                    ? modalData.city
                                    : tempText[modalData.customer_id].city
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "city",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "city", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.postcode === undefined 
                                    ? modalData.postcode
                                    : tempText[modalData.customer_id].postcode
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "postcode",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "postcode", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.sic_code === undefined 
                                    ? modalData.sic_code
                                    : tempText[modalData.customer_id].sic_code
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "sic_code",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "sic_code", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.country === undefined 
                                    ? modalData.country
                                    : tempText[modalData.customer_id].country
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "country",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "country", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.alternative_correspondence_address_line_1 === undefined 
                                    ? modalData.alternative_correspondence_address_line_1
                                    : tempText[modalData.customer_id].alternative_correspondence_address_line_1
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "alternative_correspondence_address_line_1",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "alternative_correspondence_address_line_1", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.alternative_correspondence_address_line_2 === undefined 
                                    ? modalData.alternative_correspondence_address_line_2
                                    : tempText[modalData.customer_id].alternative_correspondence_address_line_2
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "alternative_correspondence_address_line_2",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "alternative_correspondence_address_line_2", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.alternative_town === undefined 
                                    ? modalData.alternative_town
                                    : tempText[modalData.customer_id].alternative_town
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "alternative_town",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "alternative_town", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.alternative_postcode === undefined 
                                    ? modalData.alternative_postcode
                                    : tempText[modalData.customer_id].alternative_postcode
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "alternative_post_code",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "alternative_post_code", e)
                                }
                            />
                            </td>
                            <td>
                            <input
                                type="text"
                                value={tempText[modalData.customer_id]?.alternative_country === undefined 
                                    ? modalData.alternative_country
                                    : tempText[modalData.customer_id].alternative_country
                                }
                                onChange={(e) =>
                                handleUpdate(
                                    "companies",
                                    modalData.customer_id,
                                    "alternative_country",
                                    e.target.value
                                )
                                }
                                onPaste={(e) =>
                                handlePaste("companies", modalData.customer_id, "alternative_country", e)
                                }
                            />
                            </td>               
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    )   
}

export default CompaniesModal;

// find out what the &times is in the span tag