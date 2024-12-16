let customers = [
    {
        "customer_id": 105,
        "customer_name": "Sainsbury's",
        "trading_name": "Sainsbury's Plc",
        "contact_name": "Steve Smith",
        "tel_number": "000000000",
        "email": "sainsburys@sainsburys.co.uk",
        "merchant_id": "00000",
        "bank_number": "00000",
        "customer_status": "Live",
        "created": "1733698239167"
    },
    {
        "customer_id": 111,
        "customer_name": "Waitrose",
        "trading_name": "Waitrose Partnership",
        "contact_name": "Tim Smith",
        "tel_number": "222222222",
        "email": "waitrose@waitrose.co.uk",
        "merchant_id": "22222",
        "bank_number": "22222",
        "customer_status": "Declined",
        "created": "1733704031660"
    },
    {
        "customer_id": 116,
        "customer_name": "Iceland",
        "trading_name": "Iceland plc",
        "contact_name": "Claire Smith",
        "tel_number": "555555555",
        "email": "iceland@iceland.co.uk",
        "merchant_id": "55555",
        "bank_number": "55555",
        "customer_status": "Application",
        "created": "1733775508446"
    },
    {
        "customer_id": 114,
        "customer_name": "Lidl",
        "trading_name": "Lidl plc",
        "contact_name": "Bob Smith",
        "tel_number": "333333333",
        "email": "lidl@lidl.co.uk",
        "merchant_id": "33333",
        "bank_number": "33333",
        "customer_status": "Prospect",
        "created": "1733705721034"
    },
    {
        "customer_id": 109,
        "customer_name": "Tesco",
        "trading_name": "Tesco plc",
        "contact_name": "Sarah Smith",
        "tel_number": "111111111",
        "email": "tesco@tesco.co.uk",
        "merchant_id": "11111",
        "bank_number": "11111",
        "customer_status": "Application",
        "created": "1733703716624"
    },
    {
        "customer_id": 115,
        "customer_name": "Aldi",
        "trading_name": "Aldi plc",
        "contact_name": "Sam Smith",
        "tel_number": "444444444",
        "email": "aldi@aldi.co.uk",
        "merchant_id": "44444",
        "bank_number": "44444",
        "customer_status": "Live",
        "created": "1733773650441"
    }
];

let companies = [
    {
        "customer_id": "115",
        "created": "1733773650441",
        "customer_status": "Live",
        "company_name": "Aldi test4",
        "category": null,
        "company_number": null,
        "company_user": null,
        "company_address": null
    },
    {
        "customer_id": "116",
        "created": "1733775508446",
        "customer_status": "Application",
        "company_name": "Iceland test5",
        "category": null,
        "company_number": null,
        "company_user": null,
        "company_address": null
    },
    {
        "customer_id": "105",
        "created": "1733698239167",
        "customer_status": "Live",
        "company_name": "Sainsbury's test0",
        "category": null,
        "company_number": null,
        "company_user": null,
        "company_address": null
    },
    {
        "customer_id": "111",
        "created": "1733704031660",
        "customer_status": "Declined",
        "company_name": "Waitrose test2",
        "category": null,
        "company_number": null,
        "company_user": null,
        "company_address": null
    },
    {
        "customer_id": "114",
        "created": "1733705721034",
        "customer_status": "Prospect",
        "company_name": "Lidl test3",
        "category": null,
        "company_number": null,
        "company_user": null,
        "company_address": null
    },
    {
        "customer_id": "109",
        "created": "1733703716624",
        "customer_status": "Application",
        "company_name": "Tesco test1",
        "category": null,
        "company_number": null,
        "company_user": null,
        "company_address": null
    }
];

companies = companies.sort((a,b) => a.created - b.created);
customers = customers.sort((a,b) => a.created - b.created); 

for (let i = 0; i < customers.length; i++) {
    if (customers[i].company_name !== companies[i].customer_name) {
        companies[i].customer_name = `${customers[i].company_name} test${i}`;
    }
    if (customers[i].customer_status !== companies[i].customer_status) {
        companies[i].customer_status = customers[i].customer_status;
    }
}

console.log(companies)
