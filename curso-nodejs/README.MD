# Installation
1. Download and install [Docker Toolbox] 
2. Download mongodb image from Docker Hub
     ```
     $ docker pull mongo
     ```
3. Start mongodb container with the port forward between your machine and the mongodb container
    ```
     $ docker run --name mongodb -p 27017:27017 -d mongo
     ```
4. Open the VirtualBox and in "Configurations" options of the virtual machine started, configure the same previous port forward: Network > Adapter 1 > Advanced > Port Forward.

5. Test the comunication with mongodb server accessing in your browser the address: http://localhost:27017. The message below will be displayed" 

    > It looks like you are trying to access MongoDB over HTTP on the native driver port.

6. Download and install [Robo Mongo]
7. Download and install [Insomnia]

[Docker Toolbox]: <https://docs.docker.com/toolbox/overview/>
[Robo Mongo]: <https://robomongo.org/>
[Insomnia]: <https://insomnia.rest/>
