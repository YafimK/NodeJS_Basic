/**
 * Created by fimka on 12/01/2017.
 * /hello/world should return string hello world with content-type text/plain
 /add/:n/:m should return the json: {result:n*m} with content-type application/json
 /filez/* should return the file * from the filez folder (that you should add to the EX zip).
 * can be recursive e.g. /dgsd/dfdf/sfsfs.html <- in this case you should read the <your main js file path>/filez/dgsd/dfdf/sfsfs.html
 You should only support .html .css and .js files. You should return the right content-type for those :
 *.js: JavaScript : application/javascript
 *.html: HTML: text/html
 *.css: CSS: text/css

 */

let webserver1 = require("./hujiwebserver");
// webserver.use('add/:a/:b', function(rq,rs){rs.send(rq.params.a+rq.params.b)}).start(8080);
webserver1.use( '/jenkins', function(rq,rs,nxt){ rs.send("ewewe") }).start(8080);

webserver1.use('/hello', function (req, res, next){
    console.log("inside hello ");
    next();

});

webserver1.use('/hello/world', function (req, res, next){
    //res.set();
    res.send("world!");

});

var net = require('net');

var client = new net.Socket();
client.connect(8080, '127.0.0.1', function() {

    console.log('CONNECTED TO: localhost:' + 8080);

    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    client.write('GET http://www.baidu.com HTTP/1.1\r\nHost: www.baidu.com\r\n\r\n');
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {

    console.log('sent DATA: ' + data);
    // Close the client socket completely
    client.destroy();

});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});




