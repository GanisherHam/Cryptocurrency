const navBar = document.querySelector(`.navbar-menu`),
    burgerMenu = document.querySelector(`.burger`),
    burgerExit = document.querySelector(`.burger-exit`)

burgerMenu.addEventListener(`click`, ()=> {
    navBar.classList.add(`active`);
})

burgerExit.addEventListener(`click`, ()=> {
    navBar.classList.remove(`active`);
})
