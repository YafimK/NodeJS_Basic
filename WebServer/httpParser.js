/**
 * Created by fimka on 13/01/2017.
 */

//This will be our factory for creating request, response objects.

function httpRequest() {
    this.params = {};
    function setRequestParams(params)
    {
        this.params = params;
    }
}


function httpParser(){
    let pathname = url.parse(requestData);
    console.log("Request for " + pathname + " received.");
}

function parseDataSeqmant(data)
{
    let segmented = data.split('\n');
    return segmented;
}

function isHttpRequest(str)
{
    let requestType = str.split(/\\s+/g);
    let httpCheck = /^(HTTP\\.*)$/;
    if(httpCheck.test(requestType[2]))
    {
        return true;
    }
    return false;
}




module.exports = {
    httpRequest: httpRequest,
    httpParser: httpParser,
    parseDataSeqmant: parseDataSeqmant,
    isHttpRequest: isHttpRequest
};
