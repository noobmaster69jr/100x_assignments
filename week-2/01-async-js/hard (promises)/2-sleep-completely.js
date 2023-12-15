/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

const startTime = Date.now();
let endTime = startTime;

function sleep(milliseconds) {
      
    return new Promise((resolve)=>{
        let startTime = Date.now()
        let endTime = startTime;
        while(endTime - startTime < milliseconds){
            endTime = Date.now();
            //if(endTime - startTime >= milliseconds) break;
        }
        resolve()
    })
  
}

module.exports = sleep;
