const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    First_Name: {
        type: String,
        required: true,
    },

    Last_Name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    number: {
        type: number,
        required: true,
    },

    nickname: {
        type: name,
        required: true,
    }

});


const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;