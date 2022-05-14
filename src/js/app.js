import  * as mFunctions from "./modules/functions.js";

mFunctions.isWebp();

setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let h_dot = document.querySelector('.h_dot');
    let m_dot = document.querySelector('.m_dot');
    let s_dot = document.querySelector('.s_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + '<span>Часы</span>';
    minutes.innerHTML = m + '<span>Минуты</span>';
    seconds.innerHTML = s + '<span>Секунды</span>';

    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    h_dot.style.transform = `rotate(${h * 15}deg)`;
    m_dot.style.transform = `rotate(${m * 6}deg)`;
    s_dot.style.transform = `rotate(${s * 6}deg)`;
});