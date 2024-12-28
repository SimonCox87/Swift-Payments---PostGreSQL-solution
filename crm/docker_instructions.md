Instructions for running in Docker

1 - Navigate to root crm folder - enter the following command in the terminal;
    cd crm

2 - Enter the following command to build from the docker compose file;
    docker-compose up --build

3 - Open the browser and type in the following url to access the app;
    http://localhost:8080/

4 - To stop the containers place the cursor in the terminal and press ctrl-c

5 - Type the following command to stop the containers;
    docker-compose down

Instructions post-installation

1 - To run the containers containing frontend, backend and Postgresql images
    navigate to the crm folder in a terminal session.

2 - Run the following command to run the containers;
    docker-compose up
    (You do not need to build the images everytime).

3 - To stop the images press ctrl-c and in the terminal (you should still be in the
    crm directory) enter the following command; 
    docker-compose down