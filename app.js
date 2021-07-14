
const finalDate = new Date('11/26/2021  ');

let x = setInterval(function () {
    let dateNow = Date.now();
    let dateDifference = Math.abs(finalDate - dateNow);
    let days = Math.floor(dateDifference / (1000 * 3600 * 24));
    let hours = Math.floor(dateDifference % (1000 * 3600 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDifference % (1000 * 3600) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);
    const countdownDisplay =document.getElementById('countdown-display');
    countdownDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if(dateDifference<0){
        clearInterval(x);
            countdownDisplay.innerHTML = "O grande dia chegou!!!"
        if(Date.now().getDate()=== finalDate.getDate()){
            clearInterval(x);
           

        }
        else{
            countdownDisplay.innerHTML = " Agora só ano que vem " <br> "Cadastre o seu email e receba nossas ofertas!!!"
        }
    }
},1000);
console.log(days + " " + hours + " " + minutes);

