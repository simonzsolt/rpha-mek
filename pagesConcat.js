const fs = require('fs');
const csv = require('csvtojson');
const path = './pages/pagesCSV/'

var tempArr = [];
var string = "";

fs.readdir(path, function(err, files) {
    if (err) throw err;
    for (let i = 0; i < files.length; i++) {
        csv({
                delimiter: ";",
                //    headers: [ "pageNum", "path4", "path1" ],
                toArrayString: true,
                checkType: false,
                ignoreEmpty: true
            })
            .fromFile(path + files[i])
            .on('csv', (res) => {
                //res.path2 = files[i].replace('.csv', '');
                if (res == "") {
                    console.log(files[i] + " -> " + res);
                } else {
                    res.push(files[i].replace('.csv', ''))
                    // console.log(res[0] + "," + res[1] + "," + res[2]);
                    string = res[0] + "," + res[1] + "," + res[2] + "\n";
                    if ( tempArr. indexOf(string) < 0  ) {
                        tempArr.push( string );
                        //console.log(tempArr);
                    }
                    string = "";
                }
                fs.writeFile('./pagesConcat.csv', tempArr, (err) =>{
                     if (err) throw err;
                })
            })
    };
})
