function popup() {
    let btnCallModal = document.querySelectorAll('.phone_link')[0],
        btnAskModal = document.querySelectorAll('.phone_link')[1],
        close = document.querySelector('.popup_close'),

        mainForm = document.querySelector('.popup_main_form'),
        input = mainForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        inputWrapper,
        popup= document.querySelector('.popup');

        mainForm.appendChild(statusMessage);


        let message = {
            loading: "Loading",
            success: "Спасибо! Скоро мы с Вами свяжемся",
            failure: "Что-то пошло не так..."
        };
    
///////////////////////////////////////////////////////////////// закрыть открыть

    btnCallModal.addEventListener('click', function(){
            event.preventDefault();
            popup.style.display = "block";
            document.body.style.overflow = "hidden";
    });
    btnAskModal.addEventListener('click', function(){
        event.preventDefault();
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', function(){
        popup.style.display = "none";
        // mainForm.lastElementChild.remove();
        statusMessage.style.display= "none";
    });
      
//////////////////////////////////////////////////////////////////////

function validatePhone (a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
}

input[1].addEventListener('input', function(){
    if (!validatePhone(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});
//////////////////////////////////////////////////////////////////////
mainForm.addEventListener('submit', function (event) {
    inputWrapper = input[1].value;
    arr = inputWrapper.split('');

    if (!isNaN(+input[1].value) || (input[1].value[0] == '+' && !(isNaN(+input[1].value.slice(1, input[1].value.length + 1))))) {

        event.preventDefault();

        let formData = new FormData(mainForm);

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
                // console.log(obj);
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
            .then(() =>{statusMessage.innerHTML = message.loading;
            statusMessage.style.display="block";} )
            .then(() =>{statusMessage.innerHTML = message.success;
                statusMessage.style.display="block";} )
            .catch(() =>{statusMessage.innerHTML = message.failure;
                statusMessage.style.display="block";} )
            .then(clearInput);


    } else {
        event.preventDefault();
        mainForm.appendChild(statusMessage);
        statusMessage.innerHTML = "Используйте цифры и знак +";
    }
});

popup.addEventListener('click', function(){
    let target = event.target;
    if(target == popup){
        popup.style.display = "none";
    statusMessage.style.display="none";    }

});
}
module.exports = popup;