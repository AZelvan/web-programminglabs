function setRussian() {
    let name= document.getElementById('student');
    name.innerHTML = 'Овчинникова Вероника и Зельван Алина';

    let footer= document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-02, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'введите фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'введите возраст';

    document.getElementById('ok-button').value = 'Окей';
    document.getElementById('reset-button').value = 'Сброс';
}
function setEnglish() {
    let name= document.getElementById('student');
    name.innerHTML = 'Ovchinnikova Veronika and Zelvan Alina';

    let footer= document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-02, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';

    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'enter your age';

    document.getElementById('ok-button').value = 'ok';
    document.getElementById('reset-button').value = 'reset';
    
    }
