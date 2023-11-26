const mongoose = require('mongoose')
require('dotenv').config()

exports.dbconnect=()=>{
    try {
        mongoose.connect(process.env.DB_URL).then(()=>{
            console.log("db connected successfully");
        }).catch((err)=>{
            console.log(err.message);
        })
        
    } catch (error) {
        console.error(error.message)
        
    }
}