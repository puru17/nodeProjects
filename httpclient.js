const http = require("http");

var argURL = process.argv[2];

http.get(argURL, (res)=>{
    res.on('error', (e)=>{
        console.error(e.message);        
    });

    res.setEncoding('utf8');

    res.on('data', (data)=>{
        console.log(data);
        
    });

});