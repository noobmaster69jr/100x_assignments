const fs = require('fs');

console.log("start")
fs.readFile('file.txt','utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("before setTimeout")
  setTimeout(()=>{
    console.log(data)
  }, 1000)
  console.log("after settimeout");
});
console.log("end")