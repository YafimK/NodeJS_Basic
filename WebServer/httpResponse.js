/**
 * Created by fimka on 14/01/2017.
 */


// set(), status(), get() , cookie(), send() and json() .
var httpResponse = {

};

httpResponse.prototype.cookies = new Map();
httpResponse.prototype.headers = new Map();
httpRespone.prototype.body = '';

httpResponse.prototype.get = function (headerName) {
  let headerValue = this.headers.get(headerName);
  return headerValue;
};

httpResponse.prototype.js

module.exports = httpResponse;