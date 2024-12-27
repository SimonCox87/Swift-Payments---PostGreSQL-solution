-- Drop tables if they exist (useful for reinitializing the database)
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS companies CASCADE; 

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

-- Insert data into the `customers` table
INSERT INTO customers (customer_name, trading_name, contact_name, tel_number, email, merchant_id, bank_number, customer_status, created)
VALUES
('Sainsbury''s', 'Sainsbury''s Plc', 'Steve Smith', '000000000', 'sainsburys@sainsburys.co.uk', '00000', '00000', 'Live', 1733698239167),
('Waitrose', 'Waitrose Partnership', 'Tim Smith', '222222222', 'waitrose@waitrose.co.uk', '22222', '22222', 'Declined', 1733704031660),
('Iceland', 'Iceland plc', 'Claire Smith', '555555555', 'iceland@iceland.co.uk', '55555', '55555', 'Application', 1733775508446),
('Lidl', 'Lidl plc', 'Bob Smith', '333333333', 'lidl@lidl.co.uk', '33333', '33333', 'Prospect', 1733705721034),
('Tesco', 'Tesco plc', 'Sarah Smith', '111111111', 'tesco@tesco.co.uk', '11111', '11111', 'Application', 1733703716624),
('Aldi', 'Aldi plc', 'Sam Smith', '444444444', 'aldi@aldi.co.uk', '44444', '44444', 'Live', 1733773650441);

-- Insert data into the `companies` table
INSERT INTO companies (customer_id, created, customer_status, company_name, category, company_number, company_user, company_address)
VALUES
(6, 1733773650441, 'Live', 'Aldi test4', NULL, NULL, NULL, NULL),
(3, 1733775508446, 'Application', 'Iceland test5', NULL, NULL, NULL, NULL),
(1, 1733698239167, 'Live', 'Sainsbury''s test0', NULL, NULL, NULL, NULL),
(2, 1733704031660, 'Declined', 'Waitrose test2', NULL, NULL, NULL, NULL),
(4, 1733705721034, 'Prospect', 'Lidl test3', NULL, NULL, NULL, NULL),
(5, 1733703716624, 'Application', 'Tesco test1', NULL, NULL, NULL, NULL);

DO $$
DECLARE
    next_val INT;
BEGIN
    SELECT MAX(customer_id) + 1 INTO next_val FROM customers;
    IF next_val IS NOT NULL THEN
        EXECUTE format('ALTER TABLE customers ALTER COLUMN customer_id RESTART WITH %s', next_val);
    END IF;
END $$;
