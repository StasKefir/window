function popup() {
    let btnCallModal = document.querySelectorAll('.phone_link')[0],
        btnAskModal = document.querySelectorAll('.phone_link')[1],
        close = document.querySelector('.popup_close'),
        popup= document.querySelector('.popup');

        // console.log(btnCallModal);
        // console.log(btnAskModal);

    btnCallModal.addEventListener('click', function(){
            event.preventDefault();
            popup.style.display = "block";
    });
    btnAskModal.addEventListener('click', function(){
        event.preventDefault();
        popup.style.display = "block";
    });

    close.addEventListener('click', function(){
        popup.style.display = "none";
    });
      
    
}
module.exports = popup;