const query = require('../mysql/db')

//查询所有数据
let selectAll = (table,keys,callback) => {
	let _keys = '*';
	let sql = null
	if(keys.constructor === String) {
		_keys = keys
	}
	if(keys.constructor === Array) {
		_keys = keys.join(',')
	}
	sql = "select " + _keys + " from " + table + ";"
	query(sql,callback)
}

//条件查询
let selectByCondition = (table,keys,where,callback) => {
	let _keys = '*'
	let _where = []
	let sql = null
	if(keys.constructor === String) {
		_keys = keys
	}
	if(keys.constructor === Array) {
		_keys = keys.join(',')
	}
	for(let key in where) {
		_where.push((key + '=' + setValue(where[key])))  
	}
	sql = "select " + _keys + " from " + table + " where " + _where.join(' and ') + ";"
	query(sql,callback)
}

//更新数据
let updateData = (table,sets,where,callback) => {
	let _sets = []
	let _where = []
	let sql = null
	for(let key in sets) {
		_sets.push((key + '=' + setValue(sets[key]))) 
	}
	for(let key in where) {
		_where.push((key + '=' + setValue(where[key]))) 
	}
	sql = "update " + table + " set " + _sets.join(' and ') + " where " + _where.join(' and ') + ";"
	query(sql,callback)
}

//删除数据
let deleteData = (table,where,callback) => {
	let _where = []
	let sql = null
	for(let key in where) {
		_where.push((key + '=' + setValue(where[key]))) 
	}
	sql = "delete from " + table + " where " + _where.join(' and ') + ";"
	query(sql,callback)
}

//插入数据
let insertData = (table,values,callback) => {
	let _keys = []
	let _values = []
	let sql =null
	for(let key in values) {
		_keys.push(key)
		_values.push(setValue(values[key]))
	}
	sql = "insert into " + table + " ( " + _keys.join(',') + " ) " + " values " + " ( " + _values.join(',') + " );"
	query(sql,callback)
}

function setValue(value) {
	if(value.constructor === String) {
		return "'" + value + "'"
	}else {
		return value
	}
}

exports.selectAll = selectAll
exports.selectByCondition = selectByCondition
exports.updateData = updateData
exports.deleteData = deleteData
exports.insertData = insertData