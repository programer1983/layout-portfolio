const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.addEventListener("click", documentClick)



function documentClick() {
    if (navBtn){
        if (nav.classList.toggle('open')){
            navBtnImg.src = './img/icons/nav-close.svg'
        }else{
            navBtnImg.src = './img/icons/nav-open.svg'
        }
    } 
}

AOS.init();

// AOS.init({
//     once: true
// });

// AOS.init({
//     disable: 'mobile'
// });

// AOS.init({
//     disable: 'phone'
// });




