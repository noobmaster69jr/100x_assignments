let count = 1;

function counter() {
  console.log(`counter = ${count++}`);
}

setInterval(counter, 1000);
