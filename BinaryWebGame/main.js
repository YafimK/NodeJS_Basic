/**
 * Created by fimka on 17/01/2017.
 */
$ = require('jquery');
var fileReader = require('./www/fileReader');
var server = require('./../WebServer/hujiwebserver');
server.start(8081);

//Store the last score
var gambling = {
  ones: 0,
    zeros: 0
};

/**
 * Serves the main page with the game
 * @param req
 * @param res
 * @param next
 */
function serveMainPage(req, res, next){
    let fileHandler = Object.create(fileReader.fileReader);
    fileHandler.setDebugState(true);
    let htmlFile = fileHandler.readFile('./www/binary.html') || "";
 res.status(200).send(htmlFile);
}

server.use(serveMainPage);


/**
 * Button “0” means that the user choose “0”
 You should let the server know which number the user chose by sending a message to the “/gamble/0” (POST)
 You should do that using AJAX
 The server should keep counting how many users gambled on each number 0 or 1
 The server should respond with the following JSON: {“zeros”:<numberOfZeros>,”ones”:<numberOfOnes>} the client should announce if the user won/lost/tie and how many users chose each number by adding text/HTML into the screen and hide the “0” and “1” buttons.
 * @param req
 * @param res
 * @param next
 */
function buttonClickResult(req, res, next){

}

server.use('/gamble/:a', buttonClickResult);

/**
 * Button “new game” that resets the game
 Reset the number of zeros and ones users have chose so far
 You should let the server know by sending “/gamble/reset” (DELETE)
 * @param req
 * @param res
 * @param next
 */
function resetGame(req, res, next){

}

server.use('/gamble/reset', resetGame);