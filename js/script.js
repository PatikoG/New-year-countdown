const countDownevent =  new Date("Jan 1, 2023 00:00:00").getTime();

let x = setInterval(function() {    
    let now = new Date().getTime();   
    let distance = countDownevent - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("num").innerHTML = days < 10 ? "0" + days: days;
document.getElementById("hourss").innerHTML = hours < 10 ? "0" + hours: hours;
document.getElementById("minutess").innerHTML = minutes < 10 ? "0" + minutes: minutes;
document.getElementById("secondss").innerHTML = seconds  < 10 ? "0" + seconds: seconds;

if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);