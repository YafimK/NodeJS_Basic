server = net.createServer(function (c) {
    console.log('client connected ',  c.remotePort);
    c.on('end', function () {
        console.log('client disconnected');
    });
    c.on('data', function (data) {
        console.log('server received data:', data.toString());
        c.write("HTTP/1.1 404 Not Found\r\nContent-Length: 14\r\n\r\nFile not found");
        c.end();
    });
});
server.listen(8124, function () {
    console.log('server bound to 8124');
});