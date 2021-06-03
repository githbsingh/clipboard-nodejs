const UploadModel = require('../model/schema')
const fs = require('fs');
exports.home = (req,res) => {
    res.render('main');
}

exports.uploads = (req,res,next) => {
    const files = req.files;
    if(!files){
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error)
    }

    //convert images 
    let imgArray = files.map((file) => {
        let img = fs.readFileSync(file.path)

        return encode_image = img.toString('base64');
    })

    imgArray.map((src, index) =>{

        //create object to store data in the collection 
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetypes,
            ImageBitmap: src

        }

        let newUpload = new UploadModel(finalImg);

        return newUpload
            .save()
            .then(()=>{
                return {msg: `${files[index].originalname} Uploaded Successfully`}
            })

            .catch(error => {
                if(error){

                }
            })
    })
    res.json(imgArray);
}