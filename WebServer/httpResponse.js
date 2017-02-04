/**
 * Created by fimka on 14/01/2017.
 */
var STATUS_CODES = require('./httpStandard').STATUS_CODES;

// set(), status(), get() , cookie(), send() and json() .
var httpResponse = function (socket, httpType) {
    this.socket = socket;
    this.httpType = httpType;
};

httpResponse.prototype.cookies = {};
httpResponse.prototype.headers = {};
httpResponse.prototype.body = '';
httpResponse.prototype.statusCode = 200;
httpResponse.prototype.statusMsg = 'OK';

/**
 * get header value
 * @param headerName
 * @returns value or undefined if not found.
 */
httpResponse.prototype.get = function (headerName) {
    return this.headers[headerName.toLowerCase()];
};

/**
 * sends a json response with body given as parameter
 * @return {httpResponse}
 */
httpResponse.prototype.json = function (body) {
    //application/json
    this.setContentType('application/json');
    //return create body as json.
    return this.writeResponse(JSON.stringify(body));
};

/**
 * Allows to set single or multiple headers by  passing header object.
 * @param field
 * @param value
 * @returns httpResponse object (this)
 */
httpResponse.prototype.set = function (field, value) {
    if (value) {
        this.headers[field.toLowerCase()] = value;

    }
    else if (field) {
        for (var headerName in field) {
            if (field.hasOwnProperty(headerName)) {
                this.headers[headerName.toLowerCase()] = field[headerName].toString();
            }
        }
    }
    else {
        console.error("you can't set headers without setting proper values.");
        throw Error("Bad value or field.")
    }


    return this;
};

/**
 * sets the status code of the response
 * @param statusCode
 */
httpResponse.prototype.status = function (statusCode) {
    if (STATUS_CODES.hasOwnProperty(statusCode)) {
        this.statusCode = statusCode;
        this.statusMsg = STATUS_CODES[statusCode];
    }
    else {
        throw 'No such status code!';
    }
    return this;
};

/**
 *  set cookie name to value.
 *  The value parameter may be a string or JSON object
 * @param name
 * @param value
 * @param options
 * @return {httpResponse}
 */
httpResponse.prototype.cookie = function (name, value, options) {
    this.cookies.name = {value: value, options: options};
    return this;
};

/**
 * checks if content length exists in headers and if not sets it by the content length
 * @param content
 */
httpResponse.prototype.setContentLength = function (content) {
    if (content) {
        // this.set("Content-Length", content.length);
        this.set("content-length", Buffer.byteLength(content));
    }
    else {
        this.set("content-length", "0")
    }
    return this;
};

/**
 * set Content-Type field to the given value or default it to text/html
 * @param contentType
 * @return {httpResponse}
 */
httpResponse.prototype.setContentType = function (contentType) {
    if (!this.headers.hasOwnProperty('Content-Type')) {
        if (contentType) {
            this.set('content-type', contentType);
        }
        else {
            this.set('content-type', 'text/plain');
        }
    }
    return this;
};

/**
 * returns a formatted cookie header ready to be sent.
 * @return {string}
 */
httpResponse.prototype.getCookieHeader = function () {
    var cookieHeader = '';
    if (Object.keys(this.cookies).length != 0) {
        cookieHeader = 'set-cookie: '
    }

    for (var key in this.cookies) {
        if (this.cookies.hasOwnProperty(key)) {
            var value = this.cookies[key];
            cookieHeader += key + '=' + value.value;
            for (var option in value.options) {
                if (value.options.hasOwnProperty(option)) {
                    cookieHeader += ';' + value.options[option];
                }
            }
            cookieHeader += '\r\n';
        }
    }
    return cookieHeader;
};

/**
 * returns a formmated headers body for the response
 * @return {string}
 */
httpResponse.prototype.getHeadersBody = function () {
    var headerBody = '';
    for (var key in this.headers) {
        if (this.headers.hasOwnProperty(key)) {
            var value = this.headers[key];
            headerBody += (key + ': ' + value + '\r\n')
        }
    }
    return headerBody;
};

httpResponse.prototype.send = function (content) {
    this.writeResponse(content);
    return this;
};

/**
 * return a formatted string of response status code and http type
 * @return {string}
 */
httpResponse.prototype.getStatusLine = function () {
    var statusLine = '';
    statusLine = this.httpType + ' ' + this.statusCode + ' ' + this.statusMsg + '\r\n';
    return statusLine;
};

/**
 * Check content type
 */
httpResponse.prototype.checkContentType = function (content) {
    if (this.get('Content-Type')) {
        return;
    }
    if (!content || content === null) {
        content = '';
        this.setContentType('text/html');
    } else if (typeof content === 'string') {
        // var dataT = parser.parseDataSeqmant(content);
        // if(/<!DOCTYPE html>/g.test(dataT[0]) || /(<html\s+.*)/g.test(dataT[0])){
        this.setContentType('text/html');
        // } else{
        //     this.setContentType('text/plain');
        // }
    }
    else if (typeof content === 'object') {
        this.setContentType('application/json');
    }
    else {
        throw TypeError("Doesn't recognize type")
    }
};

/**
 * utility that does the actual write to the socket.
 * @param content
 * @return {httpResponse}
 */
httpResponse.prototype.writeResponse = function (content) {
    if (!content || content === null) {
        content = '';
    }
    
    this.checkContentType(content);

    if (typeof content === 'object') {
        content = JSON.stringify(content);
    }

    if (204 === this.statusCode || 304 === this.statusCode) {
        this.removeHeader('content-type');
        this.removeHeader("content-length");
        this.removeHeader('transfer-encoding');
        content = '';
    }

    this.setContentLength(content);

    this.socket.write(this.getStatusLine());
    this.socket.write(this.getHeadersBody());
    this.socket.write(this.getCookieHeader());
    this.socket.write('\r\n');
    this.socket.write(content);
    this.socket.end();
    return this;
};

module.exports = httpResponse;