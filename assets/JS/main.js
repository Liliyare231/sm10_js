let inputName = document.getElementById('name')
let inputDate = document.getElementById('date')
let submitAdd = document.getElementById('submit')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')
let link = document.querySelector('.link')




submitAdd.removeAttribute("disabled", "disabled")
let isError1 = false;
let isError2 = false;
inputName.addEventListener('change', function () {
    if (inputName.value.length < 3) {
        console.log('dvadfvaf');
        inputName.style.border = '1px solid red'
        error1.innerHTML = 'Не менее 3 символов<br><br>'
        isError = true;
    } else {
        inputName.style.border = '1px solid green'
        error1.innerHTML = ''
        isError = false;

    }


})
inputDate.addEventListener('change', function () {
    if (inputDate.value.length != 4) {
        inputDate.style.border = '1px solid red'
        error2.innerHTML = 'Необходимо ввести 4 символа<br><br>'
        isError2 = true;
    } else if ((2023 - inputDate.value) < 18) {
        inputDate.style.border = '1px solid red'
        error2.innerHTML = 'Ваш возраст меньше 18, контент недоступен<br>'
        isError2 = true;

    } else {
        inputDate.style.border = '1px solid green'
        error2.innerHTML = ''
        isError2 = false;

    }

})

submitAdd.addEventListener('click', function () {
    if (inputName.value == '' && inputDate.value == '') {
        error1.innerHTML = 'Заполните поля имения<br><br>'
        error2.innerHTML = 'Введите год рождения<br><br>'

    } else if (inputName.value == '') {
        error1.innerHTML = 'Заполните поля имения<br>'

    } else if (inputDate.value == '') {
        error2.innerHTML = 'Введите год рождения<br>'
    } else if (isError == false && isError2 == false) {
        console.log('error');
        inputName.setAttribute("disabled", "disabled")
        inputDate.setAttribute("disabled", "disabled")
        link.innerHTML = '<br>https://club.z-go.ru/'
    } 
}
)

