function showAlert () {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge <= 17) {
        greeting ='Здравствуй, ';
        if(userSex == 'female')  {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик ';
        }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'female')  {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
    alert (greeting + userName + ' ' + userSurname + '\n' 
    + 'Ваш возраст: ' + userAge);

    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' +  r + ',' + g + ',' + b + ')';
    document.getElementById('user-date').style.backgroundColor=color;
}

function makeStairs () {
    let stairs = document.querySelector(' #stairs');
    let stepCount = 20;
    for (let i = 0; i<stepCount; i++){
        stairs.innerHTML += '<div class ="step"></div>';
    }
    let steps = document.querySelectorAll(' .step');
    for (let i = 0; i<steps.length; i++) 
    {
        steps[i].style.left =(30 + 10*i) + 'px';
        steps[i].style.top =(300 + 80*i) + 'px';
        steps[i].innerHTML ='Блок номер ' + (i+1);
    }
}

function makeSnezhki () {
    let snezki = document.querySelector(' #snezki');
    let stepCount = 40;
    for (let i = 0; i<stepCount; i++){
        snezki.innerHTML += '<img class="snezhinki" src="2411815.png">';
    }
    let snezhinkis = document.querySelectorAll('.snezhinki');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for (let i = 0; i<snezhinkis.length; i++) 
    {
        snezhinkis[i].style.left = Math.random() * (screenWidth-100) + 'px';
        snezhinkis[i].style.top = Math.random() *(screenHeight-100) + 'px';
        snezhinkis[i].style.width= Math.random() * 45 + 'px';
    }
}

function Table() {
    let stepCount = 9;

    for (let i = 0; i<stepCount; i++){
        document.write ((i+1) + '*27=' + ((i+1)*27) + "<br>");
    }
    for (let i = 0; i<stepCount; i++){
        document.write ((i+1) + '*30=' + ((i+1)*30) + "<br>");
    }
}

function Load() {
    makeStairs () ;
    makeSnezhki ();
    
}