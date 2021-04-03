// Express Server

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8000;



// logs
app.use(morgan('tiny'));

//parser requests
app.use(bodyparser.urlencoded({ extended: true }));


//ejs view engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});