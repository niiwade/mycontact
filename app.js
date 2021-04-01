const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

// Routes
dotenv.config({ path: 'config.env' });
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;


// log requests
app.use(morgan('tiny'));

//body parser request 
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
//app.set("routes", path.resolve(__dirname,"routes"));




app.listen(PORT, console.log(`Server started on port: ${PORT}`));