const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const { authenticate } = require('./middlewares/auth')
// const { errorHandlers } = require('./middlewares/errorHandler')




const usersRoute = require('./router/users');



app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', usersRoute);
// app.use(authenticate);


// app.use(errorHandlers)
app.listen(3001, function() {
    console.log("Server is running on port " + 3001);
});


module.exports = app.listen(3000);