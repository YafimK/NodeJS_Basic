/**
 * Created by fimka on 12/01/2017.
 */

var webserver = require("./hujiwebserver");
webserver.use('add/:a/:b',function(rq,rs){rs.send(rq.params.a+rq.params.b)}).start(8080);