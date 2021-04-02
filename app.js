const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');


const app = express();


//set view engine
app.set("view engine", "ejs");
//app.set("routes", path.resolve(__dirname,"routes"));

// Routes
dotenv.config({ path: 'config.env' });
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;


// log requests
app.use(morgan('tiny'));

//body parser request 
app.use(bodyParser.urlencoded({ extended: true }));


//load assets
app.use(express.static(path.join(__dirname, "static")));
app.use('/css', express.static(path.resolve(__dirname, "assets/css/style.css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));



app.listen(PORT, console.log(`Server started on port: ${PORT}`));