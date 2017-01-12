const  fs = require('fs');
const path='./pages/'
const csv=require('csvtojson');

var tempArr = [];

fs.readdir(path, function (err, files) {
    if  (err) throw err;
    for (let i = 0; i < files.length; i++) {
        csv({
            delimiter:";",
            headers: [ "docBibNum", "MEK" ],
            toArrayString : true,
            checkType : false
        })
        .fromFile(path+files[i])
        .on('json', (res)=>{
            res.MEK_sub = files[i].replace('.csv', '');
            tempArr.push(res);
            fs.appendFile('./pagesJson/res.json' , JSON.stringify(res) + ', ',  (err) => {
                if (err) throw err;
            })
        })
    }
})
