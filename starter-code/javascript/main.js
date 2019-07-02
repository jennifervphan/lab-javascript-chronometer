var chronometer, btnLeft, btnRight, minDec, minUni, secDec, secUni, milDec, milUni

function printMinutes() {
    let y = chronometer.getMinutes();
    minDec.innerHTML = y[0];
    minUni.innerHTML = y[1];

}

function printSeconds() {
    let x = chronometer.getSeconds();
    secDec.innerHTML = x[0];
    secUni.innerHTML = x[1];

}

function printMilliseconds() {
    let z = chronometer.getMiliseconds();
    milDec.innerHTML = z[0];
    milUni.innerHTML = z[1];

}

function start() {
    btnLeft.removeEventListener("click", start);
    btnLeft.addEventListener("click", stop);
    btnLeft.innerHTML = "Stop";
    chronometer.startClick();
    split();
}

function stop() {
    btnLeft.removeEventListener("click", stop);
    btnLeft.addEventListener("click", start);
    btnLeft.innerHTML = "Start";
    chronometer.stopClick();
    reset();
}

function split() {
    btnRight.removeEventListener("click", pressedReset);
    btnRight.addEventListener("click", pressedSplit);
    btnRight.innerHTML = "Split";
    btnRight.style.background = "blue";
}

function reset() {
    btnRight.removeEventListener("click", pressedSplit);
    btnRight.addEventListener("click", pressedReset);
    btnRight.innerHTML = "Reset";
    btnRight.style.background = "#908e8e";
}

function pressedReset() {
    chronometer.resetClick();
}

function pressedSplit() {
    chronometer.splitClick();
}


window.onload = function() {
    chronometer = new Chronometer();
    btnLeft = document.getElementById('btnLeft');
    btnRight = document.getElementById('btnRight');
    minDec = document.getElementById('minDec');
    minUni = document.getElementById('minUni');
    secDec = document.getElementById('secDec');
    secUni = document.getElementById('secUni');
    milDec = document.getElementById('milDec');
    milUni = document.getElementById('milUni');
    btnLeft.addEventListener('click', start);
    btnRight.addEventListener('click', pressedReset);
}