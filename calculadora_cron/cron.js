var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

function start() {
    
    document.getElementById("inicio").style.display = 'none'; 
    cron = setInterval(() => { timer(); }, tempo);
}

function pausar() {
    clearInterval(cron);
    document.getElementById("inicio").style.display = "inline";
}

function zerar() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById("inicio").style.display = "inline";
    document.getElementById('num').innerHTML = "00:00:00";
}

function timer() {
    ss = ss + 1;

    if (ss == 60) {
        ss = 0;
        mm = mm + 1;
    } else if (mm == 60) {
        mm = 0;
        hh = hh + 1;
    }

    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('num').innerHTML = format;
}