


## THOUGHTS

* hmmm... so working with the mysql module i'm finding that it may be silly to create special database file in lib
* i think we can just use the module, just have to create the connection and use the query method
* so where do we do these things in the app??
	* i suppose all we do is just create a connection every time we need one for which ever end point to the api


* so had a good idea:
	* we should use something to define the endpoints, which will determine what tables in the database need to be present in order for the app to work
	* we can use all the basic CRUD behavior for which ever point resource we want
	


