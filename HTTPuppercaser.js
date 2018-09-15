const http = require("http");
const map = require("through2-map");

var server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        // var chunk;
        // req.on('data', (d)=>{
        //     chunk+=d;
        // });
        req.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
    else{
        return res.end('send a POST request\n');
    }
});

server.listen(process.argv[2]);
