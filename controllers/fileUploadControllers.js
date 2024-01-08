const fileSchema = require('../models/FileModel')
require('dotenv').config()
const cloudinary = require('cloudinary')
exports.localFileUpload = (req,res)=>{
    try {
        
        const file=req.files.file
        console.log(file)
        
        const extension = file.name.split(".")[1]

        let path = __dirname+"/uploads/" + file.name

        file.mv(path,(err)=>{
            console.log("error");
            
        })

        res.json({
            success:true,
            message:"Local file uploaded successfully"
        })
    } catch (error) {
        console.log(error.message)  
    }
}
async function uploadFile(file, folder, quality){
    const options={
        folder
    }
    options.resource_type="auto"
    if(quality){
        options.quality=quality
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options)

}
exports.imageUpload = async (req,res)=>{
    try{
        const {name,tags,email} = req.body;
        const file = req.files.file;

        const supported_File_types = ["jpg","jpeg","png"]
        const file_type = file.mimetype.split('/')[1]
        console.log(file_type)
        if(supported_File_types.includes(file_type)){
            console.log("supported");
            console.log(file.name);
            console.log(file)
            const response = await uploadFile(file, "build-with-innvovation-task");
            
            const imageUrl = response.secure_url

         const entry =await fileSchema.create({
            name,
            imageUrl,
            tags,
            email
         }
        )
        return res.json({
            message:entry
        })

        }
        else{
            return res.status(400).json({
                success:false,
                message:"file type not supported"
            })
        }

    }catch(err){
        console.error(err)
        res.status(400).json({
            message:err
        })

    }
}

exports.videoUploader = async (req,res)=>{
    try{
        const { name, tags, email } = req.body;
        const file = req.files.videoFile;

        const supported_File_types = ["mp4", "mkv"];
        const file_type = file.name.split('.')[1].toLowerCase();

        // add a upper limit of 5mb of video size to be uploaded
        if(!supported_File_types.includes(file_type)){
            return res.status(400).json({
                message: "file format not supported"
            })
        }

        const response = await uploadFile(file, "build-with-innvovation-task");
            
        const videoUrl = response.secure_url

        const entry =await fileSchema.create({
            name,
            videoUrl,
            tags,
            email
        })
        return res.json({
            message:entry
        })

    }catch(err){
        return res.status(400).json({
            "message": err.message
        })
    }
}

exports.imageReduceUpload = async (req,res)=>{

    try{
        const {name,tags,email} = req.body;
        const file = req.files.file;

        const supported_File_types = ["jpg","jpeg","png"]
        const file_type = file.mimetype.split('/')[1]
        console.log(file_type)
        if(supported_File_types.includes(file_type)){
            console.log("supported");
            console.log(file);

            console.log(file)


            const response = await uploadFile(file, "build-with-innvovation-task",30);
            
            const imageUrl = response.secure_url

         const entry =await fileSchema.create({
            name,
            imageUrl,
            tags,
            email
         }
        )
        return res.json({
            message:entry
        })

        }
        else{
            return res.status(400).json({
                success:false,
                message:"file type not supported"
            })
        }

    }catch(err){
        console.error(err)
        res.status(400).json({
            message:err
        })

    }

}