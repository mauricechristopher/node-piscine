// Setting up Express
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const express = require('express');
const path = require('path');

const app = express();
app.use(session({
    secret: 'shhhh',
    resave: true,
    saveUninitialized: false
    // store: new MongoStore({
    //     mongooseConnection: db
    // })
}));
const port = 3001

// // Setting up Mongo session
// const MongoStore = require('connect-mongo')(session);
// const mongoDB = 'mongodb://localhost/users';
// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');
// const db = mongoose.connection;

// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Initialize body-parser and serve static file public
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', routes);


//Listen on port 3001
app.listen(port, () => {
    console.log(`H&C listening on port ${port}!`)
})