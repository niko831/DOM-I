const milTens = document.getElementById('msTens');
const milHuns = document.getElementById('msHundreds');
const sec = document.getElementById('secondOnes');
const tens = document.getElementById('secondTens');

// function stoppedTime(){
//     milTens.innerHTML = 0;
//     milHuns.innerHTML = 0;
//     sec.innerHTML = 0;
//     tens.innerHTML = 1;
//     milTens.style.color = 'red';
//     milHuns.style.color = 'red';
//     sec.style.color = 'red';
//     tens.style.color = 'red';
// }

function msTenTimer(){
    let miliSec = 0;
    let timer = setInterval(function(){
        milTens.innerHTML = miliSec;
        miliSec++;
        if (miliSec >= 9){
            miliSec = 0;
        }
    }, 10)
    let second = 0;
    let endTime = setInterval(function(){
        second++;
        if (second === 1){
            clearInterval(timer);
            milTens.style.color = 'red';
        }
    }, 10000)
};

function msHunsTimer(){
    let miliHuns = 0;
    let timer = setInterval(function(){
        milHuns.innerHTML = miliHuns;
        miliHuns++;
        if (miliHuns >= 9){
            miliHuns = 0;
        }
    }, 100)
    let second = 0;
    let endTime = setInterval(function(){
        second++;
        if (second === 1){
            clearInterval(timer);
            milHuns.style.color = 'red';
        }
    }, 10000)
};

function secTimer(){
    let seconds = 0;
    let timer = setInterval(function(){
        sec.innerHTML = seconds;
        seconds++;
        if (seconds >= 9){
            seconds = 0;
        }
    }, 1000)
    let second = 0;
    let endTime = setInterval(function(){
        second++;
        if (second === 1){
            clearInterval(timer);
            sec.style.color = 'red';
        }
    }, 10000)
};

function tenTimer(){
    let ten = 0;
    let timer = setInterval(function(){
        ten++;
        tens.innerHTML = ten;
        // if (ten < 2){
        //     ten = 0;
        // }
    }, 10000)
    let second = 0;
    let endTime = setInterval(function(){
        second++;
        if (second === 1){
            clearInterval(timer);
            tens.style.color = 'red';
        }
    }, 10000)
};

window.onload = function time(){
    msTenTimer();
    msHunsTimer();
    secTimer();
    tenTimer();
}
