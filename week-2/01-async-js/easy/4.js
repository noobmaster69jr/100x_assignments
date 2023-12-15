const fs = require("fs")
console.log("start")
const data = "i'm data that is being written"
fs.writeFile("file.txt", data, (err)=> {
    if (err) throw err;
    console.log("data is being written")
} )
console.log("before file append")

fs.appendFile("file.txt", "\ndata that is being appended", (err) => {
    if (err) throw err;
    console.log("data is getting appended")
})

console.log("end of file")