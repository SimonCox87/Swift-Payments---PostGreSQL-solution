-- Drop tables if they exist (useful for reinitializing the database)
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS companies;

-- Create the `customers` table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    trading_name VARCHAR(255),
    contact_name VARCHAR(255),
    tel_number VARCHAR(15),
    email VARCHAR(255),
    merchant_id VARCHAR(20),
    bank_number VARCHAR(20),
    customer_status VARCHAR(50),
    created BIGINT
);

-- Create the `companies` table
CREATE TABLE companies (
    customer_id INT REFERENCES customers(customer_id),
    created BIGINT,
    customer_status VARCHAR(50),
    company_name VARCHAR(255),
    category VARCHAR(255),
    company_number VARCHAR(50),
    company_user VARCHAR(255),
    company_address VARCHAR(255)
);

-- Insert data into the `customers` table
INSERT INTO customers (customer_id, customer_name, trading_name, contact_name, tel_number, email, merchant_id, bank_number, customer_status, created)
VALUES
(105, 'Sainsbury''s', 'Sainsbury''s Plc', 'Steve Smith', '000000000', 'sainsburys@sainsburys.co.uk', '00000', '00000', 'Live', 1733698239167),
(111, 'Waitrose', 'Waitrose Partnership', 'Tim Smith', '222222222', 'waitrose@waitrose.co.uk', '22222', '22222', 'Declined', 1733704031660),
(116, 'Iceland', 'Iceland plc', 'Claire Smith', '555555555', 'iceland@iceland.co.uk', '55555', '55555', 'Application', 1733775508446),
(114, 'Lidl', 'Lidl plc', 'Bob Smith', '333333333', 'lidl@lidl.co.uk', '33333', '33333', 'Prospect', 1733705721034),
(109, 'Tesco', 'Tesco plc', 'Sarah Smith', '111111111', 'tesco@tesco.co.uk', '11111', '11111', 'Application', 1733703716624),
(115, 'Aldi', 'Aldi plc', 'Sam Smith', '444444444', 'aldi@aldi.co.uk', '44444', '44444', 'Live', 1733773650441);

-- Insert data into the `companies` table
INSERT INTO companies (customer_id, created, customer_status, company_name, category, company_number, company_user, company_address)
VALUES
(115, 1733773650441, 'Live', 'Aldi test4', NULL, NULL, NULL, NULL),
(116, 1733775508446, 'Application', 'Iceland test5', NULL, NULL, NULL, NULL),
(105, 1733698239167, 'Live', 'Sainsbury''s test0', NULL, NULL, NULL, NULL),
(111, 1733704031660, 'Declined', 'Waitrose test2', NULL, NULL, NULL, NULL),
(114, 1733705721034, 'Prospect', 'Lidl test3', NULL, NULL, NULL, NULL),
(109, 1733703716624, 'Application', 'Tesco test1', NULL, NULL, NULL, NULL);
