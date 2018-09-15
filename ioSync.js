const fs = require("fs");

const redFile = fs.readFileSync(process.argv[2]).toString();

var myArray = redFile.split('\n');

console.log(myArray.length - 1);