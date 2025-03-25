-- Drop tables if they exist
DROP TABLE IF EXISTS quotes CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

-- Create the `customers` table
CREATE TABLE customers (
    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    deal_type VARCHAR(50),
    locations VARCHAR(255),
    contact VARCHAR(255),
    live_date VARCHAR(10),
    expiry VARCHAR(10),
    customer_name VARCHAR(255),
    customer_status VARCHAR(11) DEFAULT 'pending',
    created BIGINT DEFAULT (EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000)
);

-- Insert data into the `customers` table (before inserting into dependent tables)
INSERT INTO customers (customer_name, customer_status, created)
VALUES
('Sainsbury''s',  'Live', 1733698239167),
('Waitrose', 'Declined', 1733704031660),
('Iceland', 'Application', 1733775508446),
('Lidl', 'Prospect', 1733705721034),
('Tesco', 'Application', 1733703716624),
('Aldi', 'Live', 1733773650441);

-- Create the `companies` table
CREATE TABLE companies (
    customer_id INT PRIMARY KEY REFERENCES customers(customer_id) ON DELETE CASCADE,
    created BIGINT,
    customer_status VARCHAR(50),
    company_name VARCHAR(255),
    entity_type VARCHAR(50),
    legal_name VARCHAR(255),
    contact VARCHAR(255),
    deals VARCHAR(255),
    locations VARCHAR(255),
    quotes VARCHAR(255),
    registered_number BIGINT,
    vat_number BIGINT,
    date_commenced_trading VARCHAR(20),
    registered_address_line_1 VARCHAR(255),
    registered_address_line_2 VARCHAR(255),
    city VARCHAR(100),
    postcode VARCHAR(20),
    sic_code VARCHAR(255),
    country VARCHAR(100),
    alternative_correspondence_address_line_1 VARCHAR(255),
    alternative_correspondence_address_line_2 VARCHAR(255),
    alternative_town VARCHAR(100),
    alternative_post_code VARCHAR(20),
    alternative_country VARCHAR(100)
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
    residential_address_line_1 VARCHAR(255),
    residential_address_line_2 VARCHAR(255),
    residential_address_town_city VARCHAR(255),
    residential_address_postcode VARCHAR(12),
    residential_address_country VARCHAR(50),
    residential_address_years_at_current_address INT,
    residential_address_months_at_current_address INT,
    previous_address_1_line_1 VARCHAR(255),
    previous_address_1_line_2 VARCHAR(255),
    previous_address_1_town_city VARCHAR(255),
    previous_address_1_postcode VARCHAR(12),
    previous_address_1_country VARCHAR(50),
    previous_address_1_years_at_current_address INT,
    previous_address_1_months_at_current_address INT,
    previous_address_2_line_1 VARCHAR(255),
    previous_address_2_line_2 VARCHAR(255),
    previous_address_2_town_city VARCHAR(255),
    previous_address_2_postcode VARCHAR(12),
    previous_address_2_country VARCHAR(50),
    previous_address_2_years_at_current_address INT,
    previous_address_2_months_at_current_address INT
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
    total_annual_turnover DECIMAL(10,2),
    about_description VARCHAR(255),
    about_goods_third_party VARCHAR(20),
    deposits_accept_deposits_prior VARCHAR(20),
    deposits_percentage_goods_or_services_deposit INT,
    deposits_size_of_deposit_advance INT,
    deposits_average_time_advance_deposits_taken VARCHAR(100),
    deposits_average_time_advance_balance_taken VARCHAR(100),
    full_payment_accept_deposits_prior VARCHAR(20),
    full_payment_percentage_goods_or_services_deposit INT,
    full_payment_size_of_deposit_advance INT,
    full_payment_average_time_advance_balance_taken VARCHAR(100),
    guarantees_levy_charge VARCHAR(10),
    guarantees_separate_percentage_card_turnover INT,
    guarantees_average_length_guarantee VARCHAR(50),
    guarantees_percentage_goods_returned INT,
    guarantees_third_party VARCHAR(10),
    guarantees_third_party_provider_name VARCHAR(255),
    memberships_levy_charges VARCHAR(10),
    memberships_percentage_card_turnover INT,
    memberships_average_length VARCHAR(50),
    memberships_cost DECIMAL(10,2),
    location_stock_other_address VARCHAR(10),
    location_stock_address_line_1 VARCHAR(255),
    location_stock_address_line_2 VARCHAR(255),
    location_stock_town_city VARCHAR(100),
    location_stock_post_code VARCHAR(12),
    location_stock_country VARCHAR(100),
    additional_information VARCHAR(255)
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
INSERT INTO companies (customer_id, created, company_name, customer_status)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4'),
(3, 1733775508446, 'Application', 'Iceland test5'),
(1, 1733698239167, 'Live', 'Sainsbury''s test0'),
(2, 1733704031660, 'Declined', 'Waitrose test2'),
(4, 1733705721034, 'Prospect', 'Lidl test3'),
(5, 1733703716624, 'Application', 'Tesco test1');

-- Insert data into the contacts table
INSERT INTO contacts (customer_id, created, company_name, customer_status)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4'),
(3, 1733775508446, 'Application', 'Iceland test5'),
(1, 1733698239167, 'Live', 'Sainsbury''s test0'),
(2, 1733704031660, 'Declined', 'Waitrose test2'),
(4, 1733705721034, 'Prospect', 'Lidl test3'),
(5, 1733703716624, 'Application', 'Tesco test1');

-- Insert data into the locations table
INSERT INTO locations (customer_id, created, customer_status, company_name)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4'),
(3, 1733775508446, 'Application', 'Iceland test5'),
(1, 1733698239167, 'Live', 'Sainsbury''s test0'),
(2, 1733704031660, 'Declined', 'Waitrose test2'),
(4, 1733705721034, 'Prospect', 'Lidl test3'),
(5, 1733703716624, 'Application', 'Tesco test1');

-- Insert data into the quotes table
INSERT INTO quotes (customer_id, created, customer_status, company_name)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4'),
(3, 1733775508446, 'Application', 'Iceland test5'),
(1, 1733698239167, 'Live', 'Sainsbury''s test0'),
(2, 1733704031660, 'Declined', 'Waitrose test2'),
(4, 1733705721034, 'Prospect', 'Lidl test3'),
(5, 1733703716624, 'Application', 'Tesco test1');