function callMeasurer() {

let btnCall = document.querySelector('.header_btn'),
    btnModal = document.querySelector('.popup_engineer'),
    input = btnModal.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    inputWrapper,
    close = document.getElementById('btn_close');

    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

////////////////////////////////////////////////////////// вызов и закрытие окна
    btnCall.addEventListener('click', function(){
        btnModal.style.display="block";
    });
    
    close.addEventListener('click', function(){
        btnModal.style.display="none";
    });
///////////////////////////////////////////////////////проверка телефона
function validatePhone (a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
}

input[1].addEventListener('input', function(){
    if (!validatePhone(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});
/////////////////////////////////////////////////////

btnModal.addEventListener('submit', function (event) {
    inputWrapper = input[1].value;
    arr = inputWrapper.split('');

    if (!isNaN(+input[1].value) || (input[1].value[1] == '+' && !(isNaN(+input[1].value.slice(1, input[1].value.length + 1))))) {

        event.preventDefault();
        btnModal.appendChild(statusMessage);
        let formData = new FormData(btnModal);

        function postData(data) {
            return new Promise(function (resolve, reject) {
                let requestSecond = new XMLHttpRequest();
                requestSecond.open('POST', 'server.php');
                requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                requestSecond.addEventListener('readystatechange', function () {
                    if (requestSecond.readyState < 4) {
                        resolve();
                    } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                let obj = {};
                data.forEach(function (value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                requestSecond.send(json);
            });
        } // end postData
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);


    } else {
        event.preventDefault();
        btnModal.appendChild(statusMessage);
        statusMessage.innerHTML = "Используйте цифры и знак +";
    }
});

}
module.exports = callMeasurer;