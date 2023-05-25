const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const date = document.querySelector('.date.date')
const clock = document.querySelector('.clock');
const loader = document.querySelector('.loader');

const monthMap = {
    '0': 'января',
    '1': 'февраля',
    '2': 'марта',
    '3': 'апреля',
    '4': 'мая',
    '5': 'июня',
    '6': 'июля',
    '7': 'августа',
    '8': 'сентября',
    '9': 'октября',
    '10': 'ноября',
    '11': 'декабря'
       
}    

function validateTime(nun) {
    const correctNumber = nun < 10 ? '0'+ nun: nun;
    return correctNumber;
}

function setTime(){
    const currentTime = new Date();
    
    date.innerHTML=`Сегодня ${currentTime.getDay()} ${monthMap[currentTime.getMonth()]} ${currentTime.getFullYear()}года `
    hoursElement.innerHTML = currentTime.getHours();
    minutesElement.innerHTML = currentTime.getMinutes();
    secondsElement.innerHTML = currentTime.getSeconds();
}
function showClock() {
  loader.style.display= 'none';
  clock.style.display= 'block';
}


setInterval(setTime, 1000);
setTimeout(showClock, 1000);
