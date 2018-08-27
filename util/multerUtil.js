const multer = require('multer')
const md5 = require('md5')
const {getSuffix} = require('./baseUtil')

const storage = multer.diskStorage({
	destination: function(req,file,cb) {
		let type = file.mimetype;
		let fileUrl = ''
		if(/^video\//gi.test(type) || /^audio\//gi.test(type)) {
			cb(null,'./public/uploads/video')
			fileUrl = '/uploads/vides'
		}else if(/^image\//gi.test(type)) {
			cb(null,'./public/uploads/images')
			fileUrl = '/uploads/images'
		}else {
			cb(null,'./public/uploads/doc')
			fileUrl = '/uploads/doc'
		}
		req.body.fileUrl = fileUrl
	},
	filename: function(req,file,cb) {
		let s = file.originalname.lastIndexOf('.')
		let suffix = file.originalname.substring(s)
		cb(null,md5(Date.now() + file.originalname) + suffix)
	}
})

const limits = {
	
}

module.exports = multer({
	storage: storage
})
