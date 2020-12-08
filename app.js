const countdowns = document.querySelectorAll('.countdown h4');
const text = document.querySelector('.countdown-container')

const futureDate = new Date(2020, 11, 25, 0, 0, 0);
const futureTime = futureDate.getTime();


function checkCountdown() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay) / oneHour);
  let mins = Math.floor((t%oneHour) / oneMin);
  let secs = Math.floor((t%oneMin) / oneSec);

  const values = [days, hours, formatNum(mins), formatNum(secs)]

  countdowns.forEach((time, index) => {
    time.innerHTML = values[index];
  })

  // after timeout
  if( t<0) {
    clearInterval(setInterval(checkCountdown, 1000));
    text.innerHTML = `<h1>happy 2021!</h1>`
  }

}


setInterval(checkCountdown, 1000); 
checkCountdown();

function formatNum(num) {
  if (num < 10) {
    return `0${num}`
  }
  return num
}