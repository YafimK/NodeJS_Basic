/**
 * Created by fimka on 13/01/2017.
 */

//This will be our factory for creating request, response objects.


var httpRequest = {
    headers: {},
    url: '',
    method: '',
    setRequestParams(params) {
        let requestLine = sl
        let headers = params.slice(1);
        let headerRegEx = /(\b[^:]+):([^']+)/g;
        headers.forEach(function(row)
        {
            row.replace(headerRegEx, function ($0, param, value) {
                headers[param] = value;
            });
        });
    },
    setBaseParams(request){
        let requestType = str.trim().split(/\s+/g);

    },
    setHttpUrl(url){
      this.url = url.parse(url)
    },
    setHttpMethod(method){
        this.method = method;
    }
};

function httpParser(data){
    console.log("Request for " + data + " received.");
}

function sliceDataSegment(data)
{
    return data.split('\n').trim();
}

function isHttpRequest(str)
{
    let requestType = str.trim().split(/\s+/g);
    let httpCheck = /(HTTP)/g;
    if(requestType[2].match(httpCheck).length > 0)
    {
        return true;
    }
    return false;
}




module.exports = {
    httpRequest: httpRequest,
    httpParser: httpParser,
    parseDataSeqmant: sliceDataSegment,
    isHttpRequest: isHttpRequest
};
