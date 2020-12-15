const express = require('express');
const app = express();
const ConnectDB = require('./Config/ConnectDB');
const router = require('./Routes/recipe');
const register = require('./Routes/user');
const admin = require('./Routes/admin');

//Parss Data
app.use(express.json());

//Connection to the DataBase
ConnectDB();

//Define the routes
app.use('/', router);
app.use('/', register);
app.use('/', admin);

//Connection to the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  err
    ? console.log('Error', err)
    : console.log(`Server running on port ${PORT}`);
});
