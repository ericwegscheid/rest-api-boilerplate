// @TODO: api definitions should include what available methods there will be
const methods = ['post', 'get', 'put', 'delete'];
const util = require('../util');

var mod = (data, callback) => {
	if( !!~methods.indexOf(data.method) ) {

		console.log('yup');

	} else {
		callback(405);
	}
};

// require: username and/or email and password
// optional: name, phone, etc.
mod.post = (data, callback) => {

};

mod.get = (data, callback) => {
};

mod.put = (data, callback) => {
};

mod.delete = (data, callback) => {

};

modules.exports = users;
