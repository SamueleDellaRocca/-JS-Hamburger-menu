let bottone = document.querySelector('.header-right > a');
let menuAperto = document.querySelector('.hamburger-menu');


bottone.addEventListener("click", myFunction);


function myFunction() {
    menuAperto.style.display = "block";
}


let bottoneChiusura = document.querySelector('.close')


bottoneChiusura.addEventListener("click", funzioneChiusura);

function funzioneChiusura() {
    menuAperto.style.display = "none";
}