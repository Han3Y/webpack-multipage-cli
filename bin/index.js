const path = require("path");

let options;
function getRoot(){
    return path.resolve(process.cwd(), options.packageName);
}
