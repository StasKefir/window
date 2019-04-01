function popupTime() {
    setTimeout(popupT, 60000)
    function popupT() {
        let btnCallModal = document.querySelectorAll('.phone_link')[0],
            btnAskModal = document.querySelectorAll('.phone_link')[1],
            close = document.querySelector('.popup_close'),
    
            mainForm = document.querySelector('.popup_main_form'),
            input = mainForm.getElementsByTagName('input'),
            statusMessage = document.createElement('div'),
            inputWrapper,
            popup= document.querySelector('.popup');
            popup.style.display = "block";
    
    
            let message = {
                loading: "Loading",
                success: "Спасибо! Скоро мы с Вами свяжемся",
                failure: "Что-то пошло не так..."
            };
        
    ///////////////////////////////////////////////////////////////// закрыть открыть
    
      
        close.addEventListener('click', function(){
            popup.style.display = "none";
            console.log(statusMessage);//пустий
            if(!(statusMessage=== null || statusMessage=== undefined )){
                // mainForm.statusMessage.innerHTML="";
                // statusMessage.parentNode.removeChild(statusMessage);
                mainForm.lastElementChild.remove();
                // mainForm.remove(statusMessage);
                console.log("delete");
                // statusMessage.remove();
            }
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
            mainForm.appendChild(statusMessage);
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
                    console.log(obj);
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
            mainForm.appendChild(statusMessage);
            statusMessage.innerHTML = "Используйте цифры и знак +";
        }
    });
    
    popup.addEventListener('click', function(){
        let target = event.target;
        if(target == popup){
            popup.style.display = "none";
            if(!(statusMessage=== null || statusMessage=== undefined )){
                // mainForm.statusMessage.innerHTML="";
                mainForm.lastElementChild.remove();
                console.log('delete 2');
            }
        }
    
    });
    }
    
}
module.exports =popupTime;