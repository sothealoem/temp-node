const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//the flag property is set to 'a',
// which stands for "append". 
// This means that if the file already exists,
// the content will be appended to the existing file 
// rather than overwriting it. If the file doesn't exist, 
// a new file will be created.
writeFileSync( 
  "./content/result-sync.txt",
  `Here is the result: \n ${first} \n ${second}`, {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

