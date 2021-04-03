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
//css/style.css


app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});