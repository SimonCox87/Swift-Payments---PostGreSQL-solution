Instructions to install modules for development

1 - Open terminal and navigate to crm directory using cd command.
    cd crm

2 - Run the bash script
    bash install_modules

3 - When propmted enter "Y" and hit return.  This opens the backend terminal in a separate
    terminal session.  To stop the terminals use ctrl-c.

4 - (a) Open a new terminal session.  Navigate to crm/client;
    cd crm/client  or cd web-portal/crm/client

    (b) In the terminal type the following command;
    npm start

TO EXIT TERMINALS PRESS THE FOLLOWING COMBINATION OF KEYS; ctrl c

5 - Postgres is installed globally.  A database is created, two tables named
    "customers" and "companies" are created and the tables are populated with
    test data.
 
6 - To view the databases enter the following series of commands to view the database
    IN LINUX TERMINAL
    -Enter the following commands in sequence;
        - sudo -i -u postgres
        - psql -U postgres -W
        - Enter password "postgres" when prompted
        - \c crm - to navigate to crm database
        - To view contents of the tables type either (make sure to include the ";" after the commands);
            - SELECT * FROM customers;
            - SELECT * FROM companies;
    
    IN macOS TERMINAL
    - Enter the following commands in the following sequence;
        - psql postgres
        - \c crm
        - To view contents of the tables type either (make sure to include the ";" after the commands);
            - SELECT * FROM customers;
            - SELECT * FROM companies;
    
    TROUBLESHOOTING
    - I think that most issues will probably arise when the postgres server stops running as a background
      process.
    - To check whether postgres is running as a background service to check this;
        - open Systems Settings
        - navigate to General -> Login Items & Extensions
        - scroll down to "Allow in the Background" and enable postgres
    
    - Via the terminal
        - type; brew services start postgresql@14.
    
    - If you already have the servers running you should be able to refresh the tab containing the web app.
      Otherwise close both servers using ctrl c and then restart the backend (server) first ("npm run start)
      and then start the frontend server(client) ("npm start").


Once the modules are installed you do not need to run the bash script again.  You will need
to be able to start the backend server and the frontend server, so that you can run the 
web app locally.  It is important you do not run the bash script again as you will lose the data
that you have inserted into the database since the first install, as you are essentially deleting
the tables and inserting the data into them from the init.sql script.  

To start the backend server.
1 - Navigate to crm/server using the cd command in vs code terminal (or open a new terminal session
    and navigate to the aforementioned directory)

2 - Run the command;
    npm run start.

3 - Press ctrl-c in the terminal to stop the server


To start the frontend server.
1 - Navigate to crm/client.  You will need to open up a new terminal session to do this.

2 - Run the command to start development server;
    npm start

3 - To stop the server press ctrl-c.
