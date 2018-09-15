var usr_args = process.argv;
var sum = 0;

usr_args.forEach((val, index) => {

    if (index > 1){
        //console.log(Number(val));
        sum+=Number(val);        
    }
});

console.log(sum);
