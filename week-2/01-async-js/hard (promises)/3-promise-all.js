/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}

function calculateTime(t1, t2, t3) {
     let startTime = Date.now();
    let promises = [wait1(t1), wait2(t2), wait3(t3)]
    return Promise.all(promises).then(()=>{
        console.log(Date.now() - startTime);
        return Date.now() - startTime
    })
}

calculateTime(1, 2, 3)  // 3000ms
module.exports = calculateTime;

/*
Promise.all
● Executes in parallel 
(asynchronous).
● Result of one promise 
cannot be passed to an 
another promise.
● Parallel execution 
guarantees in reduced 
time.
● It rejects with the 
reason of the first 
promise that rejects.


*/