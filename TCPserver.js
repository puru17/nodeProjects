const net = require("net");
const strftime = require("strftime");
date = new Date();
// console.log(date);


var server = net.createServer((socket)=>{
    fmt = '%F %R';
    data = strftime(fmt, date);    

    socket.end(`${data}\n`); // equivalent to socket.write(data); socket.end();
 
});

server.listen(process.argv[2]);