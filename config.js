var environment = {
	staging: {
		port: 3000,
		envName: 'staging'
	},
	production: {
		port: 5000,
		envName: 'production'
	}
};

// export environment details
module.exports = environment[

	// use env passed in
	typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : ''

	// default to staging
	] || environment.staging;


