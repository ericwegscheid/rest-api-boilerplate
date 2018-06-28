
## Generic Rest API

This project is intended to be somewhat of a boilerplate or starter app for a basic rest api. This app is designed to communicate with a database (MySQL) and uses https

## Setup

* Ensure node and npm are installed on your system, recommended installing the latest stable version
* Create mysql database (obviously you must have access to a system with mysql installed, google "how to install mysql" if not)
 * You may call your database whatever you'd like, i.e. `rest_api` or `peanut_butter_sandwich`
* Create a user for your database (you will need to ensure your user has permissions to the database you've just created)
 * You may call the user whatever you'd like, i.e. `rest_api_user` or `jelly_beans`

## Start application

* Navigate to root directory of application and run `npm instal1`
* After node modules are installed you may start the application with this command: 
	```
	$ node NODE_ENV=develop DB_HOST=localhost DB_NAME={your_database_name} DB_USER={your_database_username} DB_PASSWORD={your_users_database_password} index.js`
	```
	* Default host name is `localhost`
	* Default database name is `rest-api`
	* Default user name is `root`
	* Default password is ` ` (blank)



