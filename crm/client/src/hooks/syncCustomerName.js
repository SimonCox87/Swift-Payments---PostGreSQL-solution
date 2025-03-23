import { useEffect } from "react";

const useSyncCustomerName = (customer, company, contact, location, quote, amend, dataLoaded) => {
    useEffect(() => {
        // Ensure data has finished loading before executing updates
        if (!dataLoaded) return;

        // Validate that all data sources are properly intialised as arrays
        if (![customer, company, contact, location, quote].every(Array.isArray)) {
            console.warn("One or more data arrays are not initialised properly");
            return;
        }

        // Iterate over each customer to update related records in other tables
        customer.forEach((cust) => {
            if (!cust || !cust.customer_id) return; // Skip invalid customer entries

            // Find the corresponding records in each table by matching `customer_id`
            const companyEntry = company.find(c => c.customer_id === cust.customer_id);
            const contactEntry = contact.find(c => c.customer_id === cust.customer_id);
            const locationEntry = location.find(c => c.customer_id === cust.customer_id);
            const quoteEntry = quote.find(c => c.customer_id === cust.customer_id);

            // Update the `company_name` in `companies` if it is not the same
            if (companyEntry && companyEntry.company_name !== cust.customer_name) {
                amend("companies", companyEntry.customer_id, "company_name", cust.customer_name);
            }
            if (contactEntry && contactEntry.company_name !== cust.customer_name) {
                amend("contacts", contactEntry.customer_id, "company_name", cust.customer_name);
            }
            if (locationEntry && locationEntry.company_name !== cust.customer_name) {
                amend("locations", locationEntry.customer_id, "company_name", cust.customer_name);
            }
            if (quoteEntry && quoteEntry.company_name !== cust.customer_name) {
                amend("quotes", quoteEntry.customer_id, "company_name", cust.customer_name);
            }
        })
    }, [customer, company,  contact, location, quote, amend, dataLoaded])
}

export default useSyncCustomerName;