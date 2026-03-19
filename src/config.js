const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/Login');

connect.then(() => {
    console.log('Database is connection successfully');

})
    .catch(() => {
        console.log("Database cannot be connected");

    });
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const collection = mongoose.model('UserLogin', loginSchema);

// create a model
module.exports = collection;