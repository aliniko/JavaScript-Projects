const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
// console.log(tempYear)
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 3, 11, 30, 0)
// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month]
// get day of the week
const weekday = weekdays[futureDate.getDay()]
// console.log(weekday)
// get day of the month
const dayNo = futureDate.getDate()
giveaway.textContent = `Giveaway ends on ${weekday} ${dayNo} ${month} ${year} ${hour}:${minute}am`


const futureTime = futureDate.getTime();

function getRemaindingTime(){
  const today = new Date().getTime();
  // time in milliseconds
  const t =    futureTime - today;
    // console.log(t)

  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1day = 24h
  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // const oneSecond = 1000;

  // calculate all values
  let days = t / oneDay;
    days = Math.floor(days)
  const hours = Math.floor((t % oneDay)/ oneHour)
  const minutes = Math.floor((t % oneHour) / oneMinute)
  const seconds = Math.floor((t % oneMinute) / 1000)
  const mSeconds = Math.floor((t % 10))

  const values = [days, hours, minutes, seconds, mSeconds]

  function format(item){
    if(item < 10){
      return (item =  `0${item}`);
    }
      return item
  }


  // items.forEach((item, index)=>{
  //   item.innerHTML = format(values[index]);
    
  // });
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
      // console.log(item.innerHTML)
    });

if(t < 0 ){
  clearInterval(countdown)
  deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
}
  }
  // countdown
  let countdown = setInterval(getRemaindingTime, 100);

  getRemaindingTime();
