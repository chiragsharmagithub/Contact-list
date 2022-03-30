// Importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// port number
const port = 3000;

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

// on successfully connected to mongodb
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27107');
});

mongoose.connection.on('error', (err) => {
    if(err) {
        console.log('Error in database connection: ' + err);
    }
});

//testing server
app.get('/', (req, res) => {
    res.send('Welcome to the Homepage of Contacts List app');
});

// adding middleware - cors
app.use(cors());

app.use(bodyparser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', route);

// We have to bind the server with this port
app.listen(port, ()=>{
    console.log('Server started at port: ' + port);
})