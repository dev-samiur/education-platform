const multer  = require('multer')
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../frontend/public/media/images")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
  })

const upload = multer({ storage: storage }).fields([{
	name: 'thumbnail', maxCount: 1
  }, {
	name: 'trailer', maxCount: 1
  }, {
    name: 'cover_photo', maxCount: 1
  }]);

module.exports= upload