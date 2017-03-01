/**
 * Created by fimka on 14/02/2017.
 */


var pathLib = require("path");
var server = require("../../WebServer/hujiwebserver");
var STATUS_CODES = require("../../WebServer/httpStandard").STATUS_CODES;
var fs = require("fs");

var userDatabase = new Map(); //super safe user database

//Polyfill to get easy capability to endswith for getting the file extension from ES6
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}


server.start(8081, function(err){
    if(err != undefined){
        console.log(err);
    }});


/**
 * Serves the main page with the game
 * @param req
 * @param res
 * @param next
 */
function serveHttpFiles(req, res, next){
    var requestedFilePath = "";

    if(req.path === "/"){
        console.log(__dirname);
        requestedFilePath = "/www/Login.html";
    } else {
        requestedFilePath = req.path;
    }

    // requestedFilePath = '/www/' + requestedFilePath;
    requestedFilePath = __dirname + "/../"+ requestedFilePath;
    requestedFilePath = pathLib.normalize(requestedFilePath);
    console.log(requestedFilePath);
    fs.readFile(requestedFilePath, function (err, data) {
        if (err) {
            res.status(500).send(STATUS_CODES[500]);
            console.log(err);
            return;
        }

        if(requestedFilePath.endsWith('css')){
            res.set('content-type', 'text/css');
        } else if(requestedFilePath.endsWith('js')) {
            res.set('content-type', 'application/javascript');
        } else if (requestedFilePath.endsWith('html')) {
            res.set('content-type', 'text/html');
        }

        res.set('content-length', data.toString());
        res.status(200).send(data.toString());
    });

}

server.use("/app/*",serveHttpFiles);

server.use(serveHttpFiles);

function treatLogin(req, res, next) {
    //TODO: check if username is clear
    //TODO: check if it's wirhout user
    //TODO: verify it's POST
    let password = "";//TODO: add support in request webserver

    if(userDatabase.has(req.param.username)){
        if(userDatabase.get(req.param.username)){
            //TODO: redirect to game
        } else {
            res.statusCode(403).send(STATUS_CODES[403]);
        }
    } else{
        userDatabase.set(req.param.username, password);
    }
}
server.use("/login/:username", treatLogin);
