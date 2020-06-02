const milTens = document.getElementById('msTens');
const milHuns = document.getElementById('msHundreds');
const sec = document.getElementById('secondOnes');
const tens = document.getElementById('secondTens');

window.onload = function timer(){
    msTenTimer();
    msHunsTimer();
    secTimer();
};

function msTenTimer(){
    let miliSec = 0;
    let timer = setInterval(function(){
        milTens.innerHTML = miliSec;
        miliSec++;
        if (miliSec > 9){
            miliSec = 0;
        }
    }, 10)
};

function msHunsTimer(){
    let miliHuns = 0;
    let timer = setInterval(function(){
        milHuns.innerHTML = miliHuns;
        miliHuns++;
        if (miliHuns > 9){
            miliHuns = 0;
        }
    }, 100)
};

function secTimer(){
    let seconds = 0;
    let timer = setInterval(function(){
        sec.innerHTML = seconds;
        seconds++;
        if (seconds > 9){
            seconds = 0;
        }
    }, 1000)
};



