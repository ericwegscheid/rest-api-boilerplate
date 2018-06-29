const users = require('./services/users');

module.exports = {
	users: users,
	ping: (data, callback) => {
		callback(206);
	},
	notFound: (data, callback) => {
		callback(404);
	}
};
