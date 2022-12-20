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
