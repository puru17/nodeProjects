const fs = require("fs");

const dirPath = process.argv[2];
const ext = process.argv[3].toString();

fs.readdir(dirPath, (err, files)=>{
    if (err) {
        return console.log(err);
        
    }      
    for (var i=0;i<files.length;i++){
        if (files[i].endsWith(`.${ext}`)) {
            console.log(files[i])    
        }
    }
        
    
});