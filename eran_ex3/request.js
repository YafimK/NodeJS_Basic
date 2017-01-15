const url = require('url');
const constants = require('./httpConstants')

/**
 * Request constructor
 * @param HTTPRequest
 * @returns {{get: get, is: is, param: param}}
 * @constructor
 */
var Request = function(HTTPRequest) {

	this.body = {};
    this.cookies = {};
    this.headers = {};
    this.host = {};
    this.params = {};

    var HTTPRequestLines = HTTPRequest.split('\n')

	// Method SP Request-URI SP HTTP-Version CRLF
    var requestLine = HTTPRequestLines[0].split(/\s+/);
	var rawURI = requestLine[1];
    var requestURI = url.parse(rawURI, true);

    this.method = requestLine[0];
    this.path = requestURI.path;
    this.query = requestURI.query;
    this.protocol = requestLine[2];

	// Run on lines
	for (var i = 1; i < HTTPRequestLines.length; i++)
	{
		var line = HTTPRequestLines[i].split(/:\s*/);
		switch(line[0].toLowerCase())
		{
			case '':
				i++;
				if (i < HTTPRequestLines.length){
                    line = HTTPRequestLines[i].split(/\s+/);
					this.body = line;
					i++;
					while (i<HTTPRequestLines.length) {
                        line = HTTPRequestLines[i].split(/\s+/);
						this.body = this.body + '\n' + line;
					}
				}

				break;

			case 'cookie':
				//Code
				this.cookies = line[1].trim();
				break;

			case 'host':
				this.host = line[1].trim();
				break;

			default:
                var headerName = line[0].trim().toLowerCase();
				if (constants.RequestHeaders.indexOf(headerName) >= 0) {
			        this.headers[headerName] = line[1].trim();
                }
				break;

		}
		var papo = 6
	}
};

Request.prototype.get = function(name) {

    if (!name) {
        throw new TypeError('name argument is required to get');
    }

    if (typeof name !== 'string') {
        throw new TypeError('name must be a string to get');
    }

    var lc = name.toLowerCase();

    switch (lc) {
        case 'referer':
        case 'referrer':
            return this.headers.referrer || this.headers.referer;
        default:
            return this.headers[lc];
    }

};

Request.prototype.is = function(types){
    var arr = types;

    // support flattened arguments
    if (!Array.isArray(types)) {
        arr = new Array(arguments.length);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arguments[i];
        }
    }
    return typeis(this, arr);

};

Request.prototype.param = function(name, defaultValue) {
    //Defaults
    var params = this.params || {};
    var body = this.body || {};
    var query = this.query || {};

    // In case only one argument was recieved into the function
    var args = arguments.length === 1 ? 'name' : 'name, default';

    if (null != params[name] && params.hasOwnProperty(name)) return params[name];
    if (null != body[name]) return body[name];
    if (null != query[name]) return query[name];

    return defaultValue;
};

module.exports = Request;