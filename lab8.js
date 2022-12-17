function showDate (params){
    let out = document.getElementById ('today');
    let today = new Date ();
    if (today.getMonth() == 0) {out.innerHTML = 'Сегодня ' + today.getDate() + ' января ' + today.getFullYear() + ' года'}
    else if (today.getMonth() == 1) {out.innerHTML = 'Сегодня ' + today.getDate() + ' февраля ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 2) {out.innerHTML = 'Сегодня ' + today.getDate() + ' марта ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 3) {out.innerHTML = 'Сегодня ' + today.getDate() + ' апреля ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 4) {out.innerHTML = 'Сегодня ' + today.getDate() + ' мая ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 5) {out.innerHTML = 'Сегодня ' + today.getDate() + ' июня ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 6) {out.innerHTML = 'Сегодня ' + today.getDate() + ' июля ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 7) {out.innerHTML = 'Сегодня ' + today.getDate() + ' августа ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 8) {out.innerHTML = 'Сегодня ' + today.getDate() + ' сентября ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 9) {out.innerHTML = 'Сегодня ' + today.getDate() + ' октября ' + today.getFullYear()+ ' года'}
    else if (today.getMonth() == 10) {out.innerHTML = 'Сегодня ' + today.getDate() + ' ноября ' + today.getFullYear()+ ' года'}
    else {out.innerHTML = 'Сегодня ' + today.getDate() + ' декабря ' + today.getFullYear()+ ' года'}

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


