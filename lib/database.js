const mysql = require('mysql');
const config = require('./config');

class database {
	constructor(options) {
	}

	connect() {
		this.connection = mysql.createConnection(config.database);
	}

	query(str) {
// 		this.connection.query
	}

}

module.exports = database;
