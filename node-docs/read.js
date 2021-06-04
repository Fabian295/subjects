const crypto = require('crypto');


process.stdin.on(
    "readable",
    function() {
        let d = process.stdin.read();
        if(d && d == "q\n") {
            process.stdin.pause();
        }else if (d) {
        console.log(d);        
        }
    }
);

process.stdin.setEncoding("utf8");
process.stdin.resume();