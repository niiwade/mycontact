const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on port: ${PORT}`));