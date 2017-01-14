const  fs = require('fs');
const path='./pages/pagesCSV/'
const csv=require('csvtojson');

var tempArr = [];

fs.readdir(path, function (err, files) {
    if  (err) throw err;
    for (let i = 0; i < files.length; i++) {
        csv({
            delimiter:";",
            headers: [ "pageNum", "path4" ],
            toArrayString : true,
            checkType : false
        })
        .fromFile(path+files[i])
        .on('json', (res)=>{
            res.path2 = files[i].replace('.csv', '');
            tempArr.push(res);
            fs.appendFile('./pages/pagesJSON/res2.json' , JSON.stringify(res) + ', ',  (err) => {
                if (err) throw err;
            })
        })
    }
})
