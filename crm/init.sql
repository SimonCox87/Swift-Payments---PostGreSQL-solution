-- Drop tables if they exist
DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

-- Create the `customers` table
CREATE TABLE customers (
    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_name VARCHAR(255),
    trading_name VARCHAR(255),
    contact_name VARCHAR(255),
    tel_number VARCHAR(15),
    email VARCHAR(255),
    merchant_id VARCHAR(20),
    bank_number VARCHAR(20),
    customer_status VARCHAR(11) DEFAULT 'pending',
    created BIGINT DEFAULT (EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000)
);

-- Insert data into the `customers` table (before inserting into dependent tables)
INSERT INTO customers (customer_name, trading_name, contact_name, tel_number, email, merchant_id, bank_number, customer_status, created)
VALUES
('Sainsbury''s', 'Sainsbury''s Plc', 'Steve Smith', '000000000', 'sainsburys@sainsburys.co.uk', '00000', '00000', 'Live', 1733698239167),
('Waitrose', 'Waitrose Partnership', 'Tim Smith', '222222222', 'waitrose@waitrose.co.uk', '22222', '22222', 'Declined', 1733704031660),
('Iceland', 'Iceland plc', 'Claire Smith', '555555555', 'iceland@iceland.co.uk', '55555', '55555', 'Application', 1733775508446),
('Lidl', 'Lidl plc', 'Bob Smith', '333333333', 'lidl@lidl.co.uk', '33333', '33333', 'Prospect', 1733705721034),
('Tesco', 'Tesco plc', 'Sarah Smith', '111111111', 'tesco@tesco.co.uk', '11111', '11111', 'Application', 1733703716624),
('Aldi', 'Aldi plc', 'Sam Smith', '444444444', 'aldi@aldi.co.uk', '44444', '44444', 'Live', 1733773650441);

-- Create the `companies` table
CREATE TABLE companies (
    customer_id INT PRIMARY KEY REFERENCES customers(customer_id) ON DELETE CASCADE,
    created BIGINT,
    customer_status VARCHAR(50),
    company_name VARCHAR(255),
    category VARCHAR(255),
    company_number VARCHAR(50),
    company_user VARCHAR(255),
    company_address VARCHAR(255)
);

-- Create the `contacts` table
CREATE TABLE contacts (
    customer_id INT PRIMARY KEY REFERENCES customers(customer_id) ON DELETE CASCADE,
    created BIGINT,
    customer_status VARCHAR(50),
    company_name VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    title VARCHAR(12),
    position VARCHAR(255),
    contact_number VARCHAR(15),
    alternative_contact_number VARCHAR(15),
    email VARCHAR(100),
    nationality VARCHAR(50),
    date_of_birth VARCHAR(12),
    percentage_owned VARCHAR(4),
    job_role VARCHAR(50),
    address_1 VARCHAR(255),
    address_2 VARCHAR(255),
    town_city VARCHAR(255),
    postcode VARCHAR(12),
    country VARCHAR(50),
    years_at_current_address INT,
    months_at_current_address INT
);

-- Create the `locations` table
CREATE TABLE locations (
    customer_id INT PRIMARY KEY REFERENCES customers(customer_id) ON DELETE CASCADE,
    created BIGINT,
    customer_status VARCHAR(50),
    company_name VARCHAR(255),
    trading_name VARCHAR(255),
    address_1 VARCHAR(255),
    address_2 VARCHAR(255),
    town_city VARCHAR(255),
    postcode VARCHAR(12),
    country VARCHAR(50),
    contacts VARCHAR(255),
    industry_type VARCHAR(50),
    sector VARCHAR(50),
    website VARCHAR(100),
    bank_name VARCHAR(50),
    account_name VARCHAR(100),
    sort_code VARCHAR(10),
    account_number VARCHAR(20),
    total_card_turnover DECIMAL(10,2),
    debit_card_turnover DECIMAL(10,2),
    credit_card_turnover DECIMAL(10,2),
    commercial_card_turnover DECIMAL(10,2),
    average_transaction DECIMAL(10,2),
    transaction_volume INT,
    card_not_present BOOLEAN,
    total_annual_turnover DECIMAL(10,2)
);

-- Create the `quotes` table
CREATE TABLE quotes (
    customer_id INT PRIMARY KEY REFERENCES customers(customer_id) ON DELETE CASCADE,
    created BIGINT,
    customer_status VARCHAR(50),
    company_name VARCHAR(255),  
    quote_type VARCHAR(100),
    location_address VARCHAR(255),
    settlement_time VARCHAR(10),
    settlement_type VARCHAR(10),
    visa_debit VARCHAR(20),
    mastercard_debit VARCHAR(20),
    visa_credit VARCHAR(20),
    mastercard_credit VARCHAR(20),
    visa_business_debit VARCHAR(20),
    visa_commercial VARCHAR(20),
    mastercard_commercial VARCHAR(20),
    authorisation_fee DECIMAL(10,2),
    mmsc VARCHAR(20),
    amex VARCHAR(20),
    terminal_type VARCHAR(100),
    terminal_price DECIMAL(10,2),
    terminal_term VARCHAR(20),
    finance_provider VARCHAR(100)
);

-- Insert data into the companies table
INSERT INTO companies (customer_id, created, customer_status, company_name, category, company_number, company_user, company_address)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4', NULL, NULL, NULL, NULL),
(3, 1733775508446, 'Application', 'Iceland test5', NULL, NULL, NULL, NULL),
(1, 1733698239167, 'Live', 'Sainsbury''s test0', NULL, NULL, NULL, NULL),
(2, 1733704031660, 'Declined', 'Waitrose test2', NULL, NULL, NULL, NULL),
(4, 1733705721034, 'Prospect', 'Lidl test3', NULL, NULL, NULL, NULL),
(5, 1733703716624, 'Application', 'Tesco test1', NULL, NULL, NULL, NULL);

-- Insert data into the contacts table
INSERT INTO contacts (customer_id, created, customer_status, company_name, first_name, last_name, title, position, contact_number, 
    alternative_contact_number, email, nationality, date_of_birth, percentage_owned, job_role, address_1, address_2, town_city, postcode, 
    country, years_at_current_address, months_at_current_address)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4', NULL, NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3, 1733775508446, 'Application', 'Iceland test5', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1, 1733698239167, 'Live', 'Sainsbury''s test0', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2, 1733704031660, 'Declined', 'Waitrose test2', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(4, 1733705721034, 'Prospect', 'Lidl test3', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(5, 1733703716624, 'Application', 'Tesco test1', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- Insert data into the locations table
INSERT INTO locations (customer_id, created, customer_status, company_name, trading_name, address_1, address_2, town_city, postcode, country,
    contacts, industry_type, sector, website, bank_name, account_name, sort_code, account_number, total_card_turnover, debit_card_turnover,
    credit_card_turnover, commercial_card_turnover, average_transaction, transaction_volume, card_not_present, total_annual_turnover)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4', NULL, NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3, 1733775508446, 'Application', 'Iceland test5', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1, 1733698239167, 'Live', 'Sainsbury''s test0', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2, 1733704031660, 'Declined', 'Waitrose test2', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(4, 1733705721034, 'Prospect', 'Lidl test3', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL, NULL,NULL,NULL,NULL),
(5, 1733703716624, 'Application', 'Tesco test1', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- Insert data into the quotes table
INSERT INTO quotes (customer_id, created, customer_status, company_name, quote_type, location_address, settlement_time, settlement_type, visa_debit,
    mastercard_debit, visa_credit, mastercard_credit, visa_business_debit, visa_commercial, mastercard_commercial, authorisation_fee, mmsc, amex,
    terminal_type, terminal_price, terminal_term, finance_provider)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4', NULL, NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3, 1733775508446, 'Application', 'Iceland test5', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(1, 1733698239167, 'Live', 'Sainsbury''s test0', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(2, 1733704031660, 'Declined', 'Waitrose test2', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(4, 1733705721034, 'Prospect', 'Lidl test3', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(5, 1733703716624, 'Application', 'Tesco test1', NULL, NULL, NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);