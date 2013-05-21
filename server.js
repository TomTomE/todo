var connect = require("connect")
    , connect_router = require("connect_router")
    , _router = require("./router");

var httpServer = connect.createServer()
        .use(connect.logger({ immediate: true, format: 'dev' }))
        .use(connect.bodyParser())
        .use(connect.cookieParser())
        .use(connect.session({ secret: 'keyboard cat'}))
        .use(connect_router(_router.main))
        .use(connect.static(__dirname))
        .use(connect.errorHandler( {statck:true,message:true,dump:true}))
        .listen(8080, '192.168.1.2', function(){
            console.log("Run on Server...");
        });
