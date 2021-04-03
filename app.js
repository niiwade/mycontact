// Express Server

const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});