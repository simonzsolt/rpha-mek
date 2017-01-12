const  fs = require('fs');
const path='./pagesJson/';

fs.readdir(path, function(err, files){
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
        fs.readFile(path + files[i], function (err, res) {
            console.log(JSON.parse(res));
        })
    }
})
