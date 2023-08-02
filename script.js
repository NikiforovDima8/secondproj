// const nav = document.querySelector('#nav');
// const navBtn = document.querySelector('#nav-btn');
// const navBtnImg = document.querySelector('#nav-btn-img');

// navBtn.onclick = () => {
//     if (nav.classList.toggle('open')) {
//         navBtnImg.src ='./img/close.svg';
//     } else {
//         navBtnImg.src ='./img/NAV.svg';
//     }
// };


AOS.init()


const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.addEventListener('click',()=>{
    if (nav.classList.toggle('open')) {
     navBtnImg.src ='./img/close.svg';
    } else{
        navBtnImg.src ='./img/NAV.svg';
    }
})

if(nav.classList.toggle('open')){
    nav.style.display=='flex'
} else{
    nav.style.display=='none'
}
    