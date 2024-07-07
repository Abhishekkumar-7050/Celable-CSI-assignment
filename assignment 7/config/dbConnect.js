const mongoose = require('mongoose') ; 
require("dotenv").config() ;


const dbConnect = async() => {
    const  mongoUri = process.env.MONGODB_URI ;
    try {
        const connectionInstance = await mongoose.connect(mongoUri) ; 
        console.log(`mongo DB connected !! DB HOST : ${connectionInstance.connection.host}`) ;        
    } catch (error) {
        console.log(`DB error : ${error}`) ; 
        process.exit(1) ; 
    }
}
module.exports = dbConnect; 