const path = require("path");
//console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(`filePath =  ${filePath}`);


//basename method is suffix of filePath
const base = path.basename(filePath);
console.log(`base = ${base}`);

//absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(`Absolute Path =  ${absolute}`);
