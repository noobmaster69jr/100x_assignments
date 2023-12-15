/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
    let startTime = Date.now()
    await wait1(t1).then(()=>{
       return wait2(t2)
    }).then(()=>{
        return wait3(t3)
    })
    console.log(Date.now() - startTime)
   return Date.now() - startTime
}
calculateTime(1, 2, 3) //6000ms
module.exports = calculateTime;

/*
Promise chain
Executes one by one 
(synchronous).
● Result of one execution 
can be passed to the 
next step.
● Execution time to 
fulfill all the promise 
is comparatively high.
● Chaining after an error 
is possible.
*/

