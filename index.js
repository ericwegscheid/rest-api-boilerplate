const https = require('https');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const config = require('./config');
const fs = require('fs');

// instantiate https server
var server = https.createServer({
		key: fs.readFileSync('./ssl/key.pem'),
		cert: fs.readFileSync('./ssl/cert.pem')
	},(req, res) => {
		var parsedUrl = url.parse(req.url, true);
		var path = parsedUrl.pathname;
		var trimmedPath = path.replace(/^\/+|\/+$/g, '');
		var method = req.method.toLowerCase();
		var queryStringObject = parsedUrl.query;
		var headers = req.headers;
		var decoder = new StringDecoder('utf-8');
		var buffer = '';

		// payload comes in as a stream
		req.on('data', (data) => {
			buffer += decoder.write(data);
		});

		req.on('end', () => {
			buffer += decoder.end();

			(router[trimmedPath] || handlers.notFound)(
				{
					trimmedPath: trimmedPath,
					queryStringObject: queryStringObject,
					method: method,
					headers: headers,
					payload: buffer
				},
				(statusCode, payload) => {
					res.setHeader('Content-Type', 'application/json');
					res.writeHead(statusCode.constructor === Number ? statusCode  : 200);
					res.end(JSON.stringify((payload || {}).constructor === Object ? payload : {}));
				}
			);
		});
	}
);

server.listen(config.port, () => {
	console.log('server is listening on port ' + config.port + ' in "' + config.envName + '" mode');
});

// @TODO: check to ensure database tables exist (see api definitions)

var handlers = {
	ping: (data, callback) => {
		callback(206);
	},
	notFound: (data, callback) => {
		callback(404);
	}
};

var router = {
	ping: handlers.ping
};
