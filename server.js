const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
require('./config/DbConfig.js').dbconnect()
require('dotenv').config();
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

const cloudinary_connect = require('./config/CloudinaryConfig.js')
cloudinary_connect.cloudinaryConnect();
const PORT = process.env.PUBLIC_PORT || 4000;

const routes = require('./routes/FileUploadRoutes.js')
app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});