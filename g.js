// console.log('script has been made and done!');

const { exec } = require('child_process');

let args = process.argv;
args.splice(0, 2);
let str = args.join(' ');

console.log(str)