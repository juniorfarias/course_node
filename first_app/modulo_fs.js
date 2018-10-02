const fs = require('fs');

//var files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function (err, files) {
    if (err) console.log('Error');
    else console.log ('Result', files);
});