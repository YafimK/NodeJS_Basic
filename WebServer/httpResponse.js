/**
 * Created by fimka on 14/01/2017.
 */
let STATUS_CODES = require('./httpStandard');
// set(), status(), get() , cookie(), send() and json() .
var httpResponse = function (socket){
    this.socket = socket;
};

httpResponse.prototype.cookies = new Map();
httpResponse.prototype.headers = new Map();
httpResponse.prototype.body = '';
httpResponse.prototype.statusCode = '';
httpResponse.prototype.statusMsg = '';

/**
 * get header value
 * @param headerName
 * @returns value or undefined if not found.
 */
httpResponse.prototype.get = function (headerName) {
    return this.headers.get(headerName);
};

httpResponse.prototype.json = function()
{
    //return create body as json.

    return this;
};
/**
 * Allows to set single or multiple headers by  passing header object.
 * @param field
 * @param value
 * @returns httpResponse object (this)
 */
httpResponse.prototype.set = function (field, value) {
    //TODO: add some sanity checks
    if(value)
    {
        this.headers.set(field, value);

    } else if(field) {
        for(let headerName in field)
        {
            this.headers.set(headerName, field[prop].toString());
        }
    }
    else{
        console.error("you can't set headers without setting proper values.");
    }



    return this;
};
/**
 * sets the status code of the response
 * @param statusCode
 */
httpResponse.prototype.status = function (statusCode) {
  if(STATUS_CODES.hasOwnProperty(statusCode))
  {
        this.statusCode = statusCode;
        this.statusMsg = STATUS_CODES[statusCode];
  }
  else {
      throw 'No such status code!';
  }
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
    this.cookies.set(name,{value:value, options:options});
    return this;
};

module.exports = httpResponse;