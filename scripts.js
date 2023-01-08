// digital clock code:
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";

    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + "" + session;

    document.getElementById("digitalClock").innerText = time;

    document.getElementById("digitalClock").textContent - time;

    setTimeout(showTime, 1000);
}
showTime();


// Analog Clock function:
// const deg = 6;
// const hours = document.querySelector(".hour");
// const mins = document.querySelector("min");
// const secs = document.querySelector(".sec");

// const setClock = () => {
//     let day = new Date();
//     let hh = day.getHours() * 30;
//     let mm = day.getMinutes() * deg;
//     let ss = day.getSeconds() * deg;

//     hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
//     mins.style.transform = `rotateZ(${mm}deg)`;
//     secs.style.transform = `rotateZ(${ss}deg)`;
// };

// //first time:
// setClock();

// //update every 1000ms
// setInterval(setClock, 1000);


// const themeSwitch = (evt) => {
//     const switchBtn = evt.target;
//     if (switchBtn.textContent.toLowerCase() === "light") {
//         switchBtn.textContent = "dark";
//         //localStorage.setItem("theme", "dark");

//         document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//         switchBtn.textContent = "light";
//         //localStorage.setItem("theme", "light");//add this

//         document.documentElement.setAttribute("data-theme", "light");
//     }
// };

// const switchModeBtn =
//     document.querySelector(".switch-btn");
// switchModeBtn.addEventListener("click",themeSwitch, false);

// let currentTheme = "dark";
// //currentTheme = localStorage.getItem("theme")? localStorage.getItem("theme")
// // :null;

// if (currentTheme) {
//     document.documentElement.setAttribute("data-theme", currentTheme);
//     switchModeBtn.textContent = currentTheme;
// }
const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
};

// first time
setClock();
// Update every 1000 ms
setInterval(setClock, 1000);

const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if (switchBtn.textContent.toLowerCase() === "light") {
        switchBtn.textContent = "dark";
        // localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        switchBtn.textContent = "light";
        // localStorage.setItem("theme", "light"); //add this
        document.documentElement.setAttribute("data-theme", "light");
    }
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";
// currentTheme = localStorage.getItem("theme")
// 	? localStorage.getItem("theme")
// 	: null;

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    switchModeBtn.textContent = currentTheme;
}
