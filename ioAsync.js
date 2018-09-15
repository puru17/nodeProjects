const fs = require("fs");

fs.readFile(process.argv[2], (err,data)=>{
    
    if(err){
        return console.log(err);
        
    }else{
        
        var contents = data.toString();
        var numReturns = contents.split('\n').length - 1;        
        console.log(numReturns);
    }
});

