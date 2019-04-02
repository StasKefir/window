function calc() {
    let glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
        modalPopupCalc = document.querySelector('.popup_calc'),
        popupCalcContent = document.querySelector('.popup_calc_content'),
        btnCloseM1 = document.querySelector('.popup_calc_close');


        glazingPriceBtn.forEach(function(item){ // Open modal 1
            item.addEventListener('click', function(){
                popupCalcContent.style.top ="3%";
                modalPopupCalc.style.display="block";
            });
        });

        btnCloseM1.addEventListener('click', function(event){ // Close modal 1
            modalPopupCalc.style.display="none";
        });

let tabWrapper = document.querySelector('.balcon_icons'),
    popupCalc = document.querySelector('.popup_calc');
    tab = document.querySelectorAll('.icon_type'),    
    decorationChild = document.querySelectorAll('.tabs_img'),
    tabContent = document.querySelectorAll('.big_img_content'),
    popupInputCalc = popupCalc.getElementsByTagName('input');
    
    ////////////// check input forms
    function validatePhone (a) {
        return /^(|\d)\d{0,12}$/.test(a);
    }
    
    popupInputCalc[0].addEventListener('input', function(){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });
    popupInputCalc[1].addEventListener('input', function(){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });
    

    /////////////////////////////////
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    function addActiveClass(a){
        decorationChild.forEach( function(item){
            if (item== a){
                item.classList.add('active_tab');
            } else {
                item.classList.remove('active_tab');
            }
        });

    }


    tabWrapper.addEventListener('click', function (event) {
        event.preventDefault();
        let target = event.target;
        if (target && target.classList.contains('tabs_img')) {
            for (let i = 0; i < decorationChild.length; i++) {
                if (target == decorationChild[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    if(!(decorationChild[i].classList.contains('active_tab'))){
                        addActiveClass(decorationChild[i]);
                    } else{console.log('no');}
                    break;
                }
            }
        } 
       
    });
/// send form 1
let popupCalcButton = popupCalc.querySelector('.popup_calc_button'),
    popupCalcProfile = document. querySelector('.popup_calc_profile'),
    checkboxInput1= document.querySelectorAll('.checkbox')[0],
    checkboxInput2= document.querySelectorAll('.checkbox')[1],
    popupCalcButton2= document.querySelector('.popup_calc_profile_button'),
    popupCalcEnd = document.querySelector('.popup_calc_end');



popupCalcButton.addEventListener('click', function(){
    if(!(popupInputCalc[1].value === "" || popupInputCalc[1].value === null && popupInputCalc[0].value === "" || popupInputCalc[1].value === null)){
        modalPopupCalc.style.display="none";
        popupCalcProfile.style.display="block";
    } else {
        alert("введите параметры");
    }
});

checkboxInput1.addEventListener('click', function(){
    if(checkboxInput2.checked = true){
    checkboxInput2.checked = false;
    }
});
checkboxInput2.addEventListener('click', function(){
    if(checkboxInput1.checked = true){
    checkboxInput1.checked = false;
    }
});

popupCalcButton2.addEventListener('click', function(event){
    if(checkboxInput1.checked == true || checkboxInput2.checked == true){
        popupCalcProfile.style.display="none";
        popupCalcEnd.style.display ="block";
    } else {
        alert("выберите параметры");
    }
});
// ////////////////// form 3

        
}
module.exports= calc;