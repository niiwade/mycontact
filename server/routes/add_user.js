const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('add_user'));

module.exports = router;