# WorkForce
To build and run the application follow these step:-

`$ sudo docker-compose build`

=>  Go to the directory where your docker file is and run the command to build the list of container which is included in the docker-compose.yml.


`$ sudo docker-compose up`

=>  Go to the directory where your docker file is and run the command to run those containers which is mention in the docker-compose.yml.

You could face few problems related to database.

1.  You may have to run makemigration and migrate. To do that open a seperate terminal while your docker container running and run these commands.

`$ sudo docker-compose run django python3 manage.py makemigrations`

`$ sudo  docker-compose run django python3 manage.py migrate`

**Urls to open the website:** 
This project is set up using nginx docker container. Also, the way this project set up, so that the frontend and backend will run on same host and port.

[***Frontend url (Angular):***](http:\\127.0.0.1:8089 "http:\\127.0.0.1:8089")
```
http:\\127.0.0.1:8089
```

[***Backend admin panel (Django):***](http:\\127.0.0.1:8089/cadmin "http:\\127.0.0.1:8089/cadmin")
```
http:\\127.0.0.1:8089/cadmin
```

[***Backend default django admin pannel (Django):***](http:\\127.0.0.1:8089/cadmin/admin "http:\\127.0.0.1:8089/cadmin/admin")
```
http:\\127.0.0.1:8089/cadmin/admin
```

***Login credential for backend admin***



**Pgadmin4:** 
To setup pgadmin4 follow this steps.
```
Url: http://127.0.0.1:5050
Email: pgadmin@mail.com
Password: pgadmin

```

After login you need to create a server with the following options:

```
General:
	Name: test_server
Connection:
	host: postgres (name of the docker postgres service which is mention in docker-compose.yml)
	port: 5432
	maintenance database: postgres
	username: admin
	password: admin#123
```