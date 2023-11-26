const File = require('../models/FileModel.js')
require('dotenv').config()

exports.localFileUpload = (req,res)=>{
    try {
        const {name,email}=req.body;
        const file=req.files.file
        console.log(file)

        let path = process.env.PATH + Date.now()

        file.mv(path,(err)=>{
            console.log(err);
        })

        res.json({
            success:true,
            message:"Local file uploaded successfully"
        })
    } catch (error) {
        console.log(error.message)  
    }
}