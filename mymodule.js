const fs = require("fs");

var myFunc = (mydir, myext, mycallback)=>{

    var filesArr = [];

    fs.readdir(mydir,(err,files)=>{
        
        if (err) {
            return mycallback(err);
        }

        files.forEach((file)=>{
            file = file.toString();
            if (file.endsWith(`.${myext}`)) {
                filesArr.push(file);
            }
        });

        mycallback(null,filesArr);
    });
}

module.exports = myFunc;
