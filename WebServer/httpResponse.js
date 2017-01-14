/**
 * Created by fimka on 14/01/2017.
 */
let STATUS_CODES = require('./httpStandard');
// set(), status(), get() , cookie(), send() and json() .
var httpResponse = {

};

httpResponse.prototype.cookies = new Map();
httpResponse.prototype.headers = new Map();
httpRespone.prototype.body = '';
httpResponse.prototype.statusCode = '';
httpResponse.prototype.statusMsg = '';


httpResponse.prototype.get = function (headerName) {
  let headerValue = this.headers.get(headerName);
  return headerValue;
};

httpResponse.prototype.json = function()
{
    //return create body as json.

    return this;
};

httpResponse.prototype.set = function (field, value) {
    //TODO: add some sanity checks
    this.headers.set(field, value);
    return this;
};

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
module.exports = httpResponse;