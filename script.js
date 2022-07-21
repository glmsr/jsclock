let promptName = prompt("İsminiz nedir?", "")
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
text1.innerHTML = `Merhaba, <strong><span id="myName">${promptName}</span></strong>! Hoş geldin!`
text2.innerHTML = 
    `tarihinde <strong>Kodluyoruz Frontend Web Development Patikasi</strong>'nın Javascript bölümü 1. Ödevindesiniz.`

function showTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let day = date.getDay();
    function getDay() {
        switch (day) {
            case 0:
                day = "Pazar"
                break;
            case 1:
                day = "Pazartesi";
                break;
            case 2:
                day = "Salı";
                break;
            case 3:
                day = "Çarşamba";
                break;
            case 4:
                day = "Perşembe";
                break;
            case 5:
                day = "Cuma";
                break;
            case 6:
                day = "Cumartesi";
        }
        return day
    }
    let time = `${hh}:${mm}:${ss} ${getDay()}`
    
    document.getElementById("myClock").innerText = time; 
    var t = setTimeout(function(){ showTime() }, 1000); 
    
}

window.onload = showTime()