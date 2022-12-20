function clickMe (button) {
	if (button.innerHTML =='Щелчок')
		button.innerHTML='Спасибо';
    else
    if (button.innerHTML =='Имя Алина')
		button.innerHTML='Фамилия Алина';
    else
    if (button.innerHTML =='Имя Вероника')
		button.innerHTML='Фамилия Вероника';
	else
		button.innerHTML = 'Щелчок';
}

function Swap (button) {
	if (button.innerHTML =='Нажми меня') {
		button.innerHTML='Еще раз нажми';
        button.style.color= 'green';}
    else   
    if (button.innerHTML =='Еще раз нажми') {
		button.innerHTML='Еще';
        button.style.color= 'blue';}
    else
    if (button.innerHTML =='Еще') {
		button.innerHTML='Начать сначала';
        button.style.color= 'red';}
    else
    if (button.innerHTML =='Начать сначала') {
		button.innerHTML='Нажми меня';
        button.style.color= 'white';}
}

function showCoords (event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY +
     ', ctrl ' + event.ctrlKey + ', shift ' + event.shiftKey + ', alt ' + event.altKey;
}

window.addEventListener ('DOMContentLoaded', function () {
    let coords = document.querySelector ('#coords');
    coords.addEventListener('mousemove', showCoords)
});

function BlurFunc (input) {
    input.style.color= 'red';
    input.style.fontSize = 15 + 'px';
}

function FokusFunc (input) {
    input.style.color= 'green';
    input.style.fontSize = 20 + 'px';
}

function ChangeFunc(input) {
    let output = document.getElementById ('output');
    output.innerHTML = input.value;

}
function ChangeFuncDop(input) {
    let new_output = document.getElementById ('new_output');
    new_output.innerHTML = 'Молоко: ' + input.value + ' шт';
}
function ChangeFuncDop2(input) {
    let new_output = document.getElementById ('new_output2');
    new_output.innerHTML = 'Макароны: ' + input.value + ' шт';
}
function ChangeFuncDop3(input) {
    let new_output = document.getElementById ('new_output3');
    new_output.innerHTML = 'Малина: ' + input.value + ' шт';
}

