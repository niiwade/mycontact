const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home'));

router.get('/', (req, res) => res.render('_add-user'));


module.exports = router;