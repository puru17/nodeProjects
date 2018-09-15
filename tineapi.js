const http = require("http");
const url = require("url");

var server = http.createServer((req,res)=>{
    if(req.method !== 'GET'){
        return res.end('please send GET request\n');
    }

    var adr = url.parse(req.url,true);

    if (adr.pathname === '/api/parsetime'){
        var isodate = adr.query.iso
        var date = new Date(isodate);
            
        var dateobj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
        

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify( dateobj));
    }

    if (adr.pathname === '/api/unixtime'){
        var isodate = adr.query.iso
        var date = new Date(isodate);
            
        var dateobj = {
            "unixtime": date.getTime()
        }
        

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify( dateobj));
    }
    
});

server.listen(process.argv[2]);