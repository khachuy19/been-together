// document.addEventListener('DOMContentLoaded', function() {
  
//   var days = document.querySelector('.days span');
//   var hour = document.querySelector('.hour');
//   var min = document.querySelector('.min');
//   var second = document.querySelector('.second');

//   var today = new Date();
//   console.log(today);
//   var startDate = new Date(2018, 10, 1);
//   days.innerText = Math.floor((new Date - startDate)/86400000);
//   countTime();
  
//   function countTime() {
//     let today = new Date();
//     let ms = (today - startDate) % 86400000;
//     // console.log(ms)
//     hour.innerText = Math.floor(ms / 3600000);
//     min.innerText = Math.floor(ms % 3600000 / 60000);
//     if(ms % 3600000 % 60000 / 1000 < 10) {
//       second.innerText = '0' + Math.floor(ms % 3600000 % 60000 / 1000);
//     // console.log(today);
//     }
//     else {
//       second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
//     }
//   }

//   setInterval(countTime, 1000);
  
// }, false);


document.addEventListener('DOMContentLoaded', function() {
  var startDate = new Date(1999,14,11);
  let countDays = Math.floor((new Date - startDate) / 86400000);
  let dayDisplay = document.querySelector('.days span').innerText = countDays;

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    let hours = Math.floor(ms / 3600000);
    let min = Math.floor(ms % 3600000 / 60000);
    let second = Math.ceil(ms % 3600000 % 60000 / 1000);
    
    document.querySelector('.sup-time .hour').innerText = hours;
    document.querySelector('.sup-time .min').innerText = min;
    document.querySelector('.sup-time .second').innerText = second;
  }

  setInterval(countTime, 1000);
});
