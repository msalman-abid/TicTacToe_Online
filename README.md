# TicTacToe Online
A project with online multiplayer support for TicTacToe. Mono repo for both the frontend and backend. Tech stack is Express and React.


## Instructions for first-time setup
Run the following commands in the root directory: <br>
```
cd <app-directory>
npm install
```

After executing the first two for both the front-end and back-end, run 
```npm start```. Both client and server should be running for the app to function.

### Note (7-Jan-2023):
An instance of MongoDB must be running on the local machine for the server to function. A database named `tto_db` must be created and a colletablection named `users` must be created within the database. The table must have a schema with the following fields: <br>
```username: <string>``` <br>
```password: <string>``` <br>
```wins: <number>``` <br>
```losses: <number>``` <br>
```ties: <number>``` <br>
The server will be running on port 5000 and the client on port 3000.
Application has several security vulnerabilties and is not intended for production use.
