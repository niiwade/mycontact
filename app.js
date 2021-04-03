// Express Server

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8000;



// logs
app.use(morgan('tiny'));

//parser requests
app.use(bodyparser.urlencoded({ extended: true }));


//ejs view engine
app.set("view engine", "ejs");


//load assets
app.use('/css', express.static(path.join(__dirname, "assets/css")));
app.use('/js', express.static(path.join(__dirname, "assets/js")));
//css/style.css

app.disable('etag');

// Routes 
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/add_user'));


//app.get('/', (req, res) => {
//res.render("index");
//});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});