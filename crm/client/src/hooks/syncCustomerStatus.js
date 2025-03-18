import { useEffect } from "react";

const useSyncCustomerStatus = (customer, company, contact, location, quote, amend, dataLoaded) => {
    useEffect(() => {
        if (!dataLoaded) return;
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