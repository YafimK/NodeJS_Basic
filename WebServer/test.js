/**
 * Created by fimka on 12/01/2017.
 */

var webserver1 = require("./hujiwebserver");
// webserver.use('add/:a/:b', function(rq,rs){rs.send(rq.params.a+rq.params.b)}).start(8080);
webserver1.use( '/index', function(rq,rs,nxt){ rs.send("") }).start(8080);