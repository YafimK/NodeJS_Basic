/**
 * Created by fimka on 18/01/2017.
 */
var fs = require("fs");


var fileReader =
{
    debugState: false,
    setDebugState(state){
        this.debugState = true;
        return this;
    },
    readFile(filePath){
        fs.readFile(filePath, function (err, fileContent) {
            if (err) {
                return console.error(err);
            }
            console.log("file contents: " + fileContent.toString());
            return fileContent;
        });
    }
};


module.exports = {
    fileReader: fileReader
};