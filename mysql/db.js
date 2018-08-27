const mysql = require('mysql')
const config =  require('../config/index')

const pool = mysql.createPool(config.dbConfig)
 
module.exports = function(sql, callback){
  	pool.getConnection(function(err,conn){
    	conn.query(sql,function(err,rows){
      		callback(err,rows)
      		conn.release()  // 不要忘了释放
    	})    
  	})
}