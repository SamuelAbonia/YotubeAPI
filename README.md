# YoutubeAPI

## Bakcend 
Go to the Back-end folder first. Once inside, for the execution of the it is necessary to create a virtual environment.

### Virutal enviroment
- virtualenv env

#### Virtualenv MacOS
- source env/bin/activate

#### Virtualenv Windows
- env\Scripts\activate


Once the virtual environment is created it is necessary to add the following modules.

### Modules
- python -m pip install djangorestframework
- python -m pip install django-cors-headers
- python -m pip install requests

### Execution
Now inside the backend folder execute the following command to run the server

- python manage.py runserver


## Frontend

Go to the front-end directory and run the following command

- npm install

Once this command is run, it is necessary to install 3 modules that are used by the front-end

### Modules

- npm i bootstrap-icons
- npm install bootstrap@next
- npm install timeago.js

### Execution

Now inside the front-end folder you have to run the following command to run the application

- npm start

And the application will run in the http://localhost:8000 