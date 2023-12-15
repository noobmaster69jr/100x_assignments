/*
const pad = (time) => (time.toString().length <= 1 ? '0' + time : time);

function printTime() {
  const time = new Date();
  const seconds = time.getSeconds();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  console.log(
    `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} ${
      hours >= 12 ? 'PM' : 'AM'
    }`
  );
}

setInterval(printTime, 1000);
*/

setInterval(() => {
  console.clear();
  var currentDate = new Date();
  var hours = currentDate.getHours()%12
  var minutes = currentDate.getMinutes()
  var seconds = currentDate.getSeconds()
  console.log(
    `${hours < 10 ? '0':''}${hours}:${minutes < 10 ? '0':''}${minutes}:${seconds < 10 ? '0': ''}${seconds} ${ hours > 12 ? "PM" : "AM"}`
  );
}, 1000);