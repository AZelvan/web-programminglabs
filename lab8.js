function showDate (params){
    let out = document.getElementById ('today');
    let today = new Date ();
    out.innerHTML = 'Сегодня ' + today.toLocaleDateString ("ru-RU");

}

function showDaysCount(params) {
    let today = new Date ();
    let inputDate = document.querySelector ('input[type=date]');
    let birthday = new Date (inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById ('result');
    daysCount = Math.floor(daysCount);
    result.innerHTML = 'С даты рождения прошло дней: ' + daysCount;
}

window.addEventListener('load', showDate);

function showTime (){
    let outTime = document.getElementById ('time');
    let currentTime = new Date ();
    outTime.innerHTML = currentTime.toLocaleTimeString ('ru');
}

window.addEventListener('load', showTime);
setInterval (showTime, 1000);

function RoundDate () {
    let inputDate = document.querySelector ('input[type=date]');
    let birthday = new Date (inputDate.value);
    let inputDays = document.querySelector ('input[type=number]');
    let days = inputDays.value;
    let secround = (birthday.getTime() + days*1000*60*60*24);
    let result_new = document.getElementById ('result_new');
    daysround = new Date(secround);
    result_new.innerHTML = 'Дата после прибавления: ' + daysround.toLocaleDateString ("ru-RU");
}
