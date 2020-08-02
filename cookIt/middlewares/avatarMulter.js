const multer = require('multer');
const path  = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/avatars'));
    },
    filename: function (req, file, cb) {
      cb(null, `avatar-${req.body.email}-${Date.now() + path.extname(file.originalname)}`)
    }
})
   
var upload = multer({ storage: storage });

module.exports = upload;
