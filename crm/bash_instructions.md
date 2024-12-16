Instructions to install modules for development

1 - Open terminal and navigate to crm directory using cd command.
    cd crm

2 - Run the bash script
    bash install_modules

3 - When propmted enter "Y" and hit return.  This opens the servers in separate
    terminals.  To stop the terminals use ctrl-c.

4 - Postgres is installed globally.  A database is created, two tables named
    "customers" and "companies" are created and the tables are populated with
    test data.
 
5 - To view the databases enter the following series of commands to view the database
    - sudo -i -u postgres
    - psql -U postgres -W
    - Enter password "postgres" when prompted
    - \c crm - to navigate to crm database
    - To view contents of the tables type either;
        - SELECT * FROM customers;
        - SELECT * FROM companies;

To manually start the backend server

