import { useEffect } from "react";

const useSyncCustomerStatus = (customer, company, contact, location, quote, amend, dataLoaded) => {
    useEffect(() => {
        // Ensure the data is loaded
        if (!dataLoaded) return;

        // Validate that all data sources are properly intialised as arrays
        if (![customer, company, contact, location, quote].every(Array.isArray)) {
            console.warn("One or more data arrays are not initialised properly");
            return;
        }

        // Iterate over each customer to update related records in other tables
        customer.forEach((cust, index) => {
            if (company[index].customer_status !== cust.customer_status) {
                amend("companies", company[index].customer_id, "customer_status", cust.customer_status)
            }
            if (contact[index].customer_status !== cust.customer_status) {
                amend("contacts", contact[index].customer_id, "customer_status", cust.customer_status)
            }
            if (location[index].customer_status !== cust.customer_status) {
                amend("locations", location[index].customer_id, "customer_status", cust.customer_status)
            }
            if (quote[index].customer_status !== cust.customer_status) {
                amend("quotes", quote[index].customer_id, "customer_status", cust.customer_status)
            }
        })
    }, [customer, company,  contact, location, quote, amend, dataLoaded]);
} 

export default useSyncCustomerStatus;