# Nodejs Docker Sandbox

TBD
  
## Installation
* Clone the file .env-example and name it .env and update the local variables as necessary

## Usage
* Run `docker-compose up -d` to start the docker container
  * Run `docker-compose up -d --build` to rebuild the docker stack
* Run `docker-compose ps` to list docker containers
* Run `docker exec -it <container_name> /bin/bash` to enter the docker container
* Run `docker-compose down` to stop and remove the docker container

## Details
* Run `npm install` inside the docker container to build the node_modules dependencies folder