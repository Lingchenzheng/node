const express = require('express')
const router = express.Router()
const crud = require('../controller/simple-crud')

//注册接口
router.post('/register',(req,res) => {
	let {username,age} = req.body
	if(username && age) {
		crud.insertData('users',{
			username:username,
			age:age
		},function(err,rows) {
			if(err) {
				res.json({
					code: -1,
					message: '注册失败'
				})
			}else {
				res.json({
					code: 0,
					message: '注册成功'
				})
			}
		})
	}else {
		res.json({
			code: -1,
			message: '注册失败'
		})
	}
})

//登录接口
router.post('/login',(req,res) => {
	res.send('hello world')
})

//修改用户信息
router.post('/modifyUserInfo',(req,res) => {
	
})

module.exports = router
