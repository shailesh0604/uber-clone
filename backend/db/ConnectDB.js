const mongoose = require("mongoose");

async function ConnectDB() {

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error(error);
    }
}

module.exports = ConnectDB;