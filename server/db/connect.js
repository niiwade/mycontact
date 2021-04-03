const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        //mongo db connect
        const con = await mongo.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log(`Mongo DB connected: ${con.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;