
module.exports = {
	
	//mysql配置
	dbConfig: {
		host: 'localhost',
		port: 3306,
		protocol: 'mysql',
		user: 'root',
		password: 'root',
		database: 'sq',
		connectionLimit: 200
	},
	
	env: {
		dev: 'development',
		pro: 'production'
	},
	
	error_code: -1,
	
	success_code: 0
	
}
