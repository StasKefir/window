function callMeasurer() {

let btnCall = document.querySelector('.header_btn'),
    btnModal = document.querySelector('.popup_engineer'),
    close = document.getElementById('btn_close');


    btnCall.addEventListener('click', function(){
        btnModal.style.display="block";
    });
    
    close.addEventListener('click', function(){
        btnModal.style.display="none";
    });



}
module.exports = callMeasurer;