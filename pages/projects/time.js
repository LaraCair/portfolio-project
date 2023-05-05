const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const clock = document.querySelector('.clock');

function validateTime(nun) {
    const correctNumber = nun < 10 ? '0'+ nun: nun;
    return correctNumber;
}

function initTimer(){
    const currentTime = new Date();

    hoursElement.innerHTML = currentTime.getHours();
    minutesElement.innerHTML = currentTime.getMinutes();
    secondsElement.innerHTML = currentTime.getSeconds();
}

setInterval(setTime, 1000);
setTimeout
