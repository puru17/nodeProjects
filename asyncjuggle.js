//could have been done way better with a loop

const http = require("http");
const bl = require("bl");
const events = require("events");

const eventEmitter = new events.EventEmitter();

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

var data1, data2, data3 = null;


http.get(url1, (res)=>{
    res.pipe(bl((err, data)=>{
        if (err) {
            return console.log(err);
        }

        data1 = data.toString();
        console.log(data1);
        http.get(url2, (res)=>{
            res.pipe(bl((err, data)=>{
                if (err) {
                    return console.log(err);
                }
        
                data2 = data.toString();
                console.log(data2);
                http.get(url3, (res)=>{
                    res.pipe(bl((err, data)=>{
                        if (err) {
                            return console.log(err);
                        }
                
                        data3 = data.toString();
                        console.log(data3);
                        
                        //eventEmitter.emit('data3');
                    }));
                });
                //eventEmitter.emit('data2');
            }));
        });
        //eventEmitter.emit('data1');
    }));
});





// eventEmitter.on('data1', ()=>{
//     console.log(data1);    
// });

// eventEmitter.on('data2', ()=>{
//     console.log(data2);    
// });

// eventEmitter.on('data3', ()=>{
//     console.log(data3);
// });

