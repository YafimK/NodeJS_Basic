"use strict";

/**
 * Created by fimka on 14/02/2017.
 */
var pathLib = require("path");
var server = require("../../WebServer/hujiwebserver");
var STATUS_CODES = require("../../WebServer/httpStandard").STATUS_CODES;
var fs = require("fs");
var userDatabase = new Map(); //super safe user database
var gambling = {
    ones: 0,
    zeros: 0
};

server.start(8081, function (err) {
    if (err != undefined) {
        console.log(err);
    }
});

/**
 * Button “new game” that resets the game
 * @param req
 * @param res
 * @param next
 */
function resetGame(req, res, next) {
    var username = req.cookies['sessionUser'];
    if (userDatabase.has(username)) {
        gambling.ones = 0;
        gambling.zeros = 0;
        res.status(200).send(STATUS_CODES[200]);
    } else {
        var newPath = "http://" + req.get("Host") + "/www/login.html";
        res.status(403).set("Location", newPath).send(STATUS_CODES[403]);
    }
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
function buttonClickResult(req, res, next) {
    var username = req.cookies['sessionUser'];
    if (userDatabase.has(username)) {
        res.status(200).json(gambling);
        var gamblingDict = { 1: 'ones', 0: 'zeros' };
        if (!gamblingDict.hasOwnProperty(req.params.chosenNumber)) {
            next();
        }
        var currentChoice = gamblingDict[req.params.chosenNumber];
        if (currentChoice) {
            gambling[currentChoice] += 1;
        }
    } else {
        var newPath = "http://" + req.get("Host") + "/www/login.html";
        res.status(403).set("Location", newPath).send(STATUS_CODES[403]);
    }
}

function treatLogin(req, res, next) {
    //TODO: check if username is clear
    //TODO: check if it's wirhout user
    //TODO: verify it's POST
    console.log("logging ", req.params);
    var password = req.body || undefined; //TODO: add support in request webserver
    var username = req.params.username || undefined;

    function redirectResponse() {
        //TODO: redirect to game
        var cookiePath = "/";
        var domain = req.host;
        res.cookie("sessionUser", username, { Path: cookiePath, Domain: domain });
        var newPath = "http://" + req.get("Host") + "/www/game.html";
        console.log(newPath);
        res.set("Location", newPath);
        res.status(302).send();
    }

    if (userDatabase.has(username)) {
        if (userDatabase.get(username) === password) {
            redirectResponse();
        } else {
            var newPath = "http://" + req.get("Host") + "/www/login.html";
            res.status(403).set("Location", newPath).send(STATUS_CODES[403]);
        }
    } else {
        userDatabase.set(username, password);
        redirectResponse();
    }
}
/**
 * Serves the main page with the game
 * @param req
 * @param res
 * @param next
 */
function serveHttpFiles(req, res, next) {
    var requestedFilePath = "";
    if (req.path === "/") {
        console.log(__dirname);
        requestedFilePath = "/www/login.html";
    } else {
        requestedFilePath = req.path;
    }

    // requestedFilePath = '/www/' + requestedFilePath;
    requestedFilePath = __dirname + "/../" + requestedFilePath;
    requestedFilePath = pathLib.normalize(requestedFilePath);
    res.sendFile(requestedFilePath);
}

server.use('/gamble/reset', resetGame);
server.use('/gamble/:chosenNumber', buttonClickResult);

server.use("/login/:username/", treatLogin);

server.use("/public/*", serveHttpFiles);

server.use("/www/*", serveHttpFiles);