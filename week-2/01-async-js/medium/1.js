const fs = require('fs')

fs.readFile("1.txt", 'utf-8', (err, data) => {
    if (err) throw err;
    var modifiedData = data.split(" ")
    modifiedData = modifiedData.filter((item) => item != "").join(' ')
    console.log(modifiedData)
})