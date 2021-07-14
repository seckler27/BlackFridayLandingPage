
const finalDate = new Date('11/26/2021 ');
let countdownToBlackFriday = setInterval(function () {
    let dateNow = Date.now();
    let dateDifference = finalDate - dateNow;
    let days = Math.floor(dateDifference / (1000 * 3600 * 24));
    let hours = Math.floor(dateDifference % (1000 * 3600 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDifference % (1000 * 3600) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);
    const countdownDisplay = document.getElementById('countdown-display');
    countdownDisplay.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if(dateDifference < 0){
        clearInterval( countdownToBlackFriday);
            countdownDisplay.innerText = 'Chegou o grande dia!!!';      
    }
},1000);


