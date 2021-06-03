const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    filename:{
        type: String,
        unique: true,
        required: true
    },
    contentType: {
        type: String,
        required:true
    },
    ImageBitmap:{
        type: String,
        required: true
    }
})


module.exports = UploadModel = mongoose.model('uploads',uploadSchema);