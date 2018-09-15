var mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3].toString(), (err, files)=>{

    //console.log(`\n\n\npath is => ${process.argv[2].toString()}\next is => ${process.argv[3].toString()}\n\n`);
    if (err) {
        return console.log(err);
        
    }

    files.forEach(element => {
        console.log(element);
        
    });
});

// const fs = require("fs");



// console.log(`\n\n\npath is => ${process.argv[2].toString()}\n ext is => ${process.argv[3].toString()}`);