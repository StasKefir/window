function glazTabs() {
    let tabWrapper = document.querySelector('.glazing_slider'),
    tab = document.querySelectorAll('.btn-glaz'),
    decorationChild = document.querySelectorAll('.decoration-child'),// используй табы
    tabContent = document.querySelectorAll('.tab-glaz');

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
        tab.forEach( function(item){
            if (item== a){
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

    }

    tabWrapper.addEventListener('click', function (event) {
        let target = event.target,
            parentTab;
        if (target && target.classList.contains('btn-glaz')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    parentTab = tab[i].parentNode;
                    // preParent =parentTab.parentNode;
                    console.log(parentTab);
                    // console.log(preParent);
                    if(!(parentTab.classList.contains('active'))){
                        addActiveClass(parentTab);
                        // parentTab.classList.add('after_click');
                    } else{console.log('no');}
                    break;
                }
            }
        } 
       
    });

}

module.exports = glazTabs;