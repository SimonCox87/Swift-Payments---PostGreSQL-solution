When we want to update the postgres database image we first have to remove the postgres
volume attached to the postgres docker image.

This is achieved by the following steps;

- Navigate to web-portal/crm
    cd web-portal/crm

- Remove the postgres volume with this command
    docker-compose down -v

- Run the image with the following command
    docker-compose up -d