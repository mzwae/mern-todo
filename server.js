const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;
// const db = process.env.mongoURI;
// const db = process.env.mongoURI;
var db = 'mongodb://localhost/merntodo';
// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


// Use api routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}...`));
