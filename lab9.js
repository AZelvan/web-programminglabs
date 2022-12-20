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
