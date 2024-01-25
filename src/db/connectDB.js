require('dotenv').config();
const mongoose = require('mongoose');

const getConnectionString = () => {
    let connectionString = process.env.DB_URL;
    connectionString = connectionString.replace('<username>', process.env.DB_USER)
    connectionString = connectionString.replace('<password>', process.env.DB_PASS)
    return connectionString;
}

const connectDB = async () => {
    try {
        console.log('connecting to database....')
        const mongoUrl = getConnectionString();
        await mongoose.connect(mongoUrl)
        console.log('connected to database!!!')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;