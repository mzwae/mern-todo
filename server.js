const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;
const db = process.env.mongoURI;

// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}...`));