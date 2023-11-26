const express= require('express')
const router = express.Router()
const controller = require('../controllers/fileUploadControllers')

router.post("/localFileUpload",controller.localFileUpload)


module.exports=router;