const upload = require('../util/multerUtil')
const express = require('express')
const router = express.Router()

//单个文件上传
router.post('/upload/single',upload.single('logo'),(req,res,next) => {
	res.send('222')
})

router.post('/upload/logo',upload.array('logo',12),(req,res,next) => {
	
	res.send('333')
})

module.exports = router