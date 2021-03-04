let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let phase = document.querySelector("#phase");
let UTCMode = document.querySelector(".change-time-zone-mode");
let date = document.querySelector(".date");
let birthDay = document.querySelector("#birthday");
let iconOMORI = document.querySelector(".icon");
//let icon = window.getComputedStyle(document.querySelector(".change-time-zone-mode"), ":before").getPropertyValue("background-image");
let intervalLocal;
let intervalUTC;

// clock for Local
function timeLocal() {
    document.body.removeAttribute("onload");
    document.body.setAttribute("onload", "timeLocal()");
    let d = new Date();

    intervalLocal = setInterval(() => {
        let hr = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        let am = "AM";

        if (hr > 12) {
            hr = hr - 12;
            am = "PM"
        }

        hr = hr < 10 ? "0" + hr : hr;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML = sec;
        phase.innerHTML = am;

    });

    clearInterval(intervalUTC);

    iconOMORI.style.backgroundImage = "url(img/sunny-violin.gif)";
    UTCMode.innerHTML = "Switch to UTC";
    UTCMode.removeAttribute("onclick");
    UTCMode.setAttribute("onclick", "timeUTC()");
    date.innerHTML = d.toDateString();

    if (d.getMonth() === 0 && d.getDate() === 1) {
        birthDay.innerHTML = "🎂 " + "Hero\'s Birthday";
        birthDay.classList.add("hero");
        setTimeout(() => {
            birthDay.classList.remove("hero");
        }, 86400000);
    } else if (d.getMonth() === 1 && d.getDate() === 18) {
        birthDay.innerHTML = "🎂 " + "Basil\'s Birthday";
        birthDay.classList.add("basil");
        setTimeout(() => {
            birthDay.classList.remove("basil");
        }, 86400000);
    } else if (d.getMonth() === 2 && d.getDate() === 1) {
        birthDay.innerHTML = "🎂 " + "Mari\'s Birthday";
        birthDay.classList.add("mari");
        setTimeout(() => {
            birthDay.classList.remove("mari");
        }, 86400000);
    } else if (d.getMonth() === 4 && d.getDate() === 23) {
        birthDay.innerHTML = "🎂 " + "Aubrey\'s Birthday";
        birthDay.classList.add("aubrey");
        setTimeout(() => {
            birthDay.classList.remove("aubrey");
        }, 86400000);
    } else if (d.getMonth() === 6 && d.getDate() === 20) {
        birthDay.innerHTML = "🎂 " + "Sunny\'s Birthday";
        birthDay.classList.add("sunny");
        setTimeout(() => {
            birthDay.classList.remove("sunny");
        }, 86400000);
    } else if (d.getMonth() === 10 && d.getDate() === 11) {
        birthDay.innerHTML = "🎂 " + "Kel\'s Birthday";
        birthDay.classList.add("kel");
        setTimeout(() => {
            birthDay.classList.remove("kel");
        }, 86400000);
    }
}

//clock for Universal
function timeUTC() {
    document.body.removeAttribute("onload");
    document.body.setAttribute("onload", "timeUTC()")
    let d = new Date();

    intervalUTC = setInterval(() => {
        let hr = new Date().getUTCHours();
        let min = new Date().getUTCMinutes();
        let sec = new Date().getUTCSeconds();
        let am = "UTC";

        hr = hr < 10 ? "0" + hr : hr;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML = sec;
        phase.innerHTML = am;
    }, 1000)

    clearInterval(intervalLocal);

    iconOMORI.style.backgroundImage = "url(img/omori-violin.gif)";
    UTCMode.innerHTML = "Switch to Local";
    UTCMode.removeAttribute("onclick");
    UTCMode.setAttribute("onclick", "timeLocal()");
    date.innerHTML = d.toDateString();

    if (d.getUTCMonth() === 0 && d.getUTCDate() === 1) {
        birthDay.innerHTML = "🎂 " + "Hero\'s Birthday";
        birthDay.classList.add("hero");
        setTimeout(() => {
            birthDay.classList.remove("hero");
        }, 86400000);
    } else if (d.getUTCMonth() === 1 && d.getUTCDate() === 18) {
        birthDay.innerHTML = "🎂 " + "Basil\'s Birthday";
        birthDay.classList.add("basil");
        setTimeout(() => {
            birthDay.classList.remove("basil");
        }, 86400000);
    } else if (d.getUTCMonth() === 2 && d.getUTCDate() === 1) {
        birthDay.innerHTML = "🎂 " + "Mari\'s Birthday";
        birthDay.classList.add("mari");
        setTimeout(() => {
            birthDay.classList.remove("mari");
        }, 86400000);
    } else if (d.getUTCMonth() === 4 && d.getUTCDate() === 23) {
        birthDay.innerHTML = "🎂 " + "Aubrey\'s Birthday";
        birthDay.classList.add("aubrey");
        setTimeout(() => {
            birthDay.classList.remove("aubrey");
        }, 86400000);
    } else if (d.getUTCMonth() === 6 && d.getUTCDate() === 20) {
        birthDay.innerHTML = "🎂 " + "Sunny\'s Birthday";
        birthDay.classList.add("sunny");
        setTimeout(() => {
            birthDay.classList.remove("sunny");
        }, 86400000);
    } else if (d.getUTCMonth() === 10 && d.getUTCDate() === 11) {
        birthDay.innerHTML = "🎂 " + "Kel\'s Birthday";
        birthDay.classList.add("kel");
        setTimeout(() => {
            birthDay.classList.remove("kel");
        }, 86400000);
    }

}

// pause play for audio
function playAudio() {
    let musik = document.getElementsByTagName('audio')[0];
    let togglePlayPause = document.querySelector(".note");

    musik.play();
    togglePlayPause.removeAttribute("onclick");
    togglePlayPause.setAttribute("onclick", "pauseAudio()")
}

function pauseAudio() {
    let musik = document.getElementsByTagName('audio')[0];
    let togglePlayPause = document.querySelector(".note");

    musik.pause();
    togglePlayPause.removeAttribute("onclick");
    togglePlayPause.setAttribute("onclick", "playAudio()")
}