-- command to create database
CREATE DATABASE crm;

-- command to create customers table with the names of the columns and their data types
CREATE TABLE
    customers (
        customer_id SERIAL PRIMARY KEY,
        company_name VARCHAR(255),
        trading_name VARCHAR(255),
        contact_name VARCHAR(255),
        tel_number VARCHAR(20),
        email VARCHAR(255),
        merchant_id VARCHAR(50),
        bank_number VARCHAR(34),
        customer_status VARCHAR(11) DEFAULT 'pending',
        created BIGINT DEFAULT EXTRACT(\q
            EPOCH
            FROM
                CURRENT_TIMESTAMP
        ) * 1000
    );

-- sample test data into customers table to test
INSERT INTO
    customers (
        company_name,
        trading_name,
        contact_name,
        tel_number,
        email,
        merchant_id,
        bank_number,
        customer_status,
        created
    )
VALUES
    (
        'Test Company',
        'Test Trading',
        'John Doe',
        '1234567890',
        'johndoe@example.com',
        'M12345',
        '12345678901234567890123456789012',
        'active',
        EXTRACT(
            EPOCH
            FROM
                CURRENT_TIMESTAMP
        ) * 1000
    );

-- create companies table
CREATE TABLE
    companies (
        customer_id VARCHAR(255) PRIMARY KEY,
        created VARCHAR(255),
        customer_status VARCHAR(11),
        company_name VARCHAR(255),
        category VARCHAR(255),
        company_number VARCHAR(255),
        company_user VARCHAR(255),
        company_address VARCHAR(255)
    );



