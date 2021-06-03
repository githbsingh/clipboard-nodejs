const mongoose = require('mongoose');

const config = require('../../config');
const Connect = async() => {
    try {
        const con = await mongoose.connect(config.MONGO_URI,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = Connect;