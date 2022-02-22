// ELEMENTI
const menuAperto = document.getElementsByClassName('hamburger_menu')
const btnMenu = document.getElementsByClassName('icona');
// menuAperto.className = "open";



btnMenu.addEventListener('click', myFunction);

function myFunction() {
    menuAperto.classList.toggle('open');
}

