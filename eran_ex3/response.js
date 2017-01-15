const constants = require('./httpConstants.js');

/**
 * Response constructor
 * @param socket
 * @param request
 * @constructor
 */
var Response = function(socket, request) {

	this._headers = {};
    this._statusCode = constants.StatusCodes.OK;
	this._socket = socket;
	this._req = request;
};

/**
 * Sets cookie name to value. The value parameter may be a string or object converted to JSON.
 * @param name
 * @param value
 * @returns {Response}
 */
Response.prototype.cookie = function(name, value) {
    // TODO signature, secret
    value = typeof value === 'object'
        ? 'j:' + JSON.stringify(value)
        : String(value);

    var prev = this.get('Set-Cookie');
    if (prev) {
        // append this cookie to previous
        if (Array.isArray(prev)) {
            value = prev.concat(value);
        } else {
            value = [prev, value];
        }
        this.set('Set-Cookie', value);
    }

    return this;
};

/**
 * Returns the HTTP response header specified by field.
 * The match is case-insensitive.
 *
 * @param field
 * @returns {*}
 */
Response.prototype.get = function(field) {
    if (typeof field !== 'string') {
        throw new TypeError('"field" argument must be a string')
    }

    if (this._headers.hasOwnProperty(field.toLowerCase())) {
        return this._headers[field.toLowerCase()];
    }

    return '';
};

/**
 * Sends a JSON response. This method sends a response (with the correct
 * content-type) that is the parameter converted to a JSON string using
 * JSON.stringify().
 *
 * The parameter can be any JSON type, including object, array, string,
 * Boolean, or number, and you can also use it to convert other values to
 * JSON, such as null, and undefined (although these are technically not
 * valid JSON).
 *
 * @param body
 * @returns {Response}
 */
Response.prototype.json = function(body) {
    if (body === undefined) {
        body = {};
    }

    body = JSON.stringify(body);

    if (this.get('Content-Type') === '') {
        this.set('Content-Type', 'application/json');
    }

    this.send(body);

    return this;
};

/**
 * Sends the HTTP response.
 * The body parameter can be a String, an object, or an Array.
 * @param body
 * @returns {Response}
 */
Response.prototype.send = function(body) {

    var encoding;

    switch (typeof body) {
        case 'string':
            if (this.get('Content-Type') === '') { // set content type to html
                this.set('Content-Type', 'text/html');
            }

            break;

        case 'boolean':
        case 'number':
        case 'object':
            if (body === null) {
                body = '';
            } else {
                return this.json(body);
            }

            break;
    }

    if (typeof body === 'string') {
        encoding = 'utf8'; // strings are written in utf8
    }

    if (body !== undefined) {
        this.set('Content-Length', body.length);
    }

    // TODO ETag

    // remove irrelevant headers
    if (204 === this._statusCode || 304 === this._statusCode) {
        this.removeHeader('Content-Type');
        this.removeHeader('Content-Length');
        this.removeHeader('Transfer-Encoding');
        body = '';
    }

    body = this.respond(body);

    // send response and close connection
    this._socket.isDataSent = true;
    this._socket.end(body, encoding);

    return this;
};

/**
 * Sets the response’s HTTP header field to value. To set multiple fields
 * at once, pass an object as the parameter.
 * @param field
 * @param value
 * @returns {Response}
 */
Response.prototype.set = function(field, value) {

    if (arguments.length === 2) { // field and value provided

        if (typeof field !== 'string') {
            throw new TypeError('"field" argument must be a string')
        }

        if (value === undefined) {
            throw new Error('"value" required in set("' + field + '", value)');
        }

        if (Array.isArray(value)) {
            value = value.map(String);
        } else {
            value = String(value);
        }

        // TODO check for status?
        this._headers[field.toLowerCase()] = value;

    } else { // only first argument provided - parse object
        for (var key in field) {
            this.set(key, field[key])
        }
    }

    return this;
};

/**
 * Set response status code
 * @param code
 * @returns {Response}
 */
Response.prototype.status = function(code) {
    if (!(typeof code === 'number' && Math.floor(code) === code)) {
        throw new TypeError('"field" argument must be an integer')
    }

    this._statusCode = code;
    return this;
};

Response.prototype.removeHeader = function(field) {
    if (typeof field !== 'string') {
        throw new TypeError('"field" argument must be a string')
    }

    if (this.get(field)) {
        delete this._headers[field];
    }

    return this;
};

Response.prototype.respond = function(body) {
    var rawResponse = '';

    // Status-Line = HTTP-Version SP Status-Code SP Reason-Phrase CRLF
    rawResponse += this._req.protocol + ' ' + this._statusCode + ' ' +
				   constants.StatusCodes[this._statusCode] + constants.CRLF;

    // *(( general-header
    //  | response-header
    //  | entity-header ) CRLF)
    for (var header in this._headers) {
        rawResponse += header + ': ' + this._headers[header] + constants.CRLF;
    }

    // CRLF
    rawResponse += constants.CRLF;

    // [ message-body ]
	// TODO body
	rawResponse += body;

	return rawResponse;
};

module.exports = Response;