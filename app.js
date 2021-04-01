const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees == 90) {
        secondHand.classList.add('transition-off');

    } else {
        secondHand.classList.remove('transition-off')
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) +90;
    if (minsDegrees == 90) {
        minsHand.classList.add('transition-off');
    } else {
        minsHand.classList.remove('transition-off')
    }
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 60) * 360);
    if (hourDegrees == 90) {
        hourHand.classList.add('transition-off');
    } else {
        hourHand.classList.remove('transition-off')
    }
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);
