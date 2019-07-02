class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId;
    }

    setTime() {
        printMinutes();
        printSeconds();
        printMilliseconds();
    }

    increase() {
        this.currentTime++;
        this.setTime();
    }

    startClick() {
        this.intervalId = setInterval(this.increase.bind(this), 10);
    }

    getMinutes() {
        this.minutes = Math.floor(this.currentTime / 6000);
        this.splitMin = this.twoDigitsNumber(this.minutes);
        return this.splitMin.split("");
    }

    getSeconds() {
        this.seconds = Math.floor((this.currentTime % 6000) / 100);
        this.splitSec = this.twoDigitsNumber(this.seconds);
        return this.splitSec.split("");
    }

    getMiliseconds() {
        this.miliseconds = (this.currentTime % 60000) % 100;
        this.splitMilsec = this.twoDigitsNumber(this.miliseconds);
        return this.splitMilsec.split("");
    }

    twoDigitsNumber(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }

    stopClick() {
        console.log(clearInterval(this.intervalId));
    }

    resetClick() {
        this.currentTime = 0;
        this.setTime();
        this.deleteSplit = document.getElementById("splits");
        this.deleteSplit.innerHTML = "";
    }

    splitClick() {
        this.splitBox = document.getElementById("splits");
        this.newSplit = document.createElement("li");
        this.newSplit.innerHTML = `${this.splitMin}:${this.splitSec}:${this.splitMilsec}`;
        this.splitBox.appendChild(this.newSplit);
    }
}