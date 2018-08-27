const express = require('express')
const chalk = require('chalk')
const path = require('path')
const bodyParser = require('body-parser')
const net = require('net')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const router = require('./routes/index')


//配置公开目录
app.use(express.static('./public'))

//配置模板引擎
app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'views'))

//配置post请求参数获取
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const obj = {
	msg:''
}



const server = net.createServer(tcp => {
	tcp.on('data',msg => {
		obj.msg = msg.toLocaleString()
		console.log(msg)
	})
})

io.on('connection',(socket) => {
	socket.emit('news',{hello:'world'})
	socket.on('my other event', function (data) {
    	console.log(data)
  	})
  	Object.defineProperty(obj,'msg',{
	set: function(newValue) {
		console.log(newValue)
		socket.emit('news',{hello:newValue})
	}
})

  	
})

//配置跨域
app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin', '*')
 	next()
})



router(app)

app.all('*',(req,res) => {
	res.render('error.html')
})

server.listen(4000,() => {
	console.log('the tcpserver is running ...')
})
http.listen(3000,() => {
	console.log(chalk.blue('the httpserver is running at port 3000...'))
	
})
