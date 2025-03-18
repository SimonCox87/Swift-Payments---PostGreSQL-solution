import { useEffect } from "react";

const useSyncCustomerName = (customer, company, contact, location, quote, amend, dataLoaded) => {
    useEffect(() => {
        if (!dataLoaded) return;
        customer.forEach((cust, index) => {
            if (company[index].company_name !== cust.customer_name) {
                amend("companies", company[index].customer_id, "company_name", cust.customer_name)
            }
            if (contact[index].company_name !== cust.customer_name) {
                amend("contacts", contact[index].customer_id, "company_name", cust.customer_name)
            }
            if (location[index].company_name !== cust.customer_name) {
                amend("locations", location[index].customer_id, "company_name", cust.customer_name)
            }
            if (quote[index].company_name !== cust.customer_name) {
                amend("quotes", quote[index].customer_id, "company_name", cust.customer_name)
            }
        })
    }, [customer, company,  contact, location, quote, amend, dataLoaded])
}

export default useSyncCustomerName;