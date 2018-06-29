var database = {
	host: process.env.DB_HOST || 'localhost',
	database: process.env.DB_NAME || 'rest-api',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || ''
};

var environment = {
	develop: {
		port: 3000,
		envName: 'develop',
		database: database
	},
	production: {
		port: 5000,
		envName: 'production',
		database: database
	}
};

// export environment details
module.exports = environment[

	// use env passed in
	typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : ''

	// default to develop
	] || environment.develop;


