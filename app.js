// Express Server

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/db/connect');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8000;



// logs
app.use(morgan('tiny'));

//mongo db coonection
connectDB();

//parser requests
app.use(bodyparser.urlencoded({ extended: true }));


//ejs view engine
app.set("view engine", "ejs");


//load assets
app.use('/css', express.static(path.join(__dirname, "assets/css")));
app.use('/js', express.static(path.join(__dirname, "assets/js")));
//css/style.css

app.disable('etag'); // stops 304 error 

// Routes 
app.use('/', require('./server/routes/index'));
//app.use('/add_user', require('./server/routes/add_user'));
app.get('/views/add_user.ejs', (req, res) => {
    res.render("add_user");
});

app.get('/views/edit_user.ejs', (req, res) => {
    res.render("edit_user");
});

//app.get('/', (req, res) => {
//res.render("index");
//});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});