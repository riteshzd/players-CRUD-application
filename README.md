# players-CRUD-application

This application stores a players information, which includes Name,Age,Club,Position in which he plays.
This application uses Node JS and MongoDB for scripting and as database respectively.
The packages installed are express(), mongoose(), body-parser()  which can be installed using npm install.
I didnt use a front end language so I took the help of POSTMAN software to complete the API functions(create,read,update,delete).
For the same reason, I am not adding the views folder.
I used Robo3T to view the database, for easier checking of info during operations.
To see the working, first one needs to run mongod.exe in cmd and then run the app.js file. Then the operations can be done in 
POSTMAN and corresponding results can be seen through Robo3T.
I am still trying to add more features into this API and I will commit the changes if any.

All available routes are

/get - Sample route to check the connection

/create - Route to create a player object

/:id  - Route to read info about a particular player

/:id/update - Route to update info about a player

/:id/delete - Route to delete a player

/search/:pos - Route to search players for a particular position

/sort/:pos - Route to sort players as per their age (preferably ratings) for a particular position

EDIT 1

The player field in the schema is renamed into name field

EDIT 2

A new route is added in which players of a particular position can be searched.

EDIT 3

A new route is added so that we can find out players in a sorted order of a given parameter for a position. Presently, it is being added as age but I plan to introduce ratings for players giving priority to various contributions. The route will give players in increasing order of ratings for a particular position.

