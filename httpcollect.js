const http = require("http");
const bl = require("bl");

const argURL = process.argv[2];

http.get(argURL, (res)=>{

    res.pipe(bl((err, data)=>{

        if (err) {
            return console.log(err);
        }

        data = data.toString();

        console.log(data.length);
        console.log(data);
    }));
});
