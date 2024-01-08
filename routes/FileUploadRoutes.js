const express= require('express')
const router = express.Router()
const controller = require('../controllers/fileUploadControllers')

router.post("/localFileUpload",controller.localFileUpload)
router.post("/cloudinary/upload",controller.imageUpload)
router.post('/video/upload', controller.videoUploader);
router.post('/image/reduce/upload', controller.imageReduceUpload)

module.exports=router;