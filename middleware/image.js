const multer = require('multer')

// Image Uploads
const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please Upload a picture'))
    }
    cb(undefined, true)
  }
})

module.exports = upload