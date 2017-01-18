/**
 * Created by fimka on 18/01/2017.
 */
var fs = require("fs");


var fileReader = function()
{
    this.debugState = false;
    fileReader.setDebugState= function(state){
        this.debugState = true;
        return this;
    };
    fileReader.readFile = function(filePath){
        fs.readFile(filePath, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("file contents: " + data.toString());
            return data;
        });
    }
};


module.exports = {
    fileReader: fileReader
};