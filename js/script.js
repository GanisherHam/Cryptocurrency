const navBar = document.querySelector(`.navbar-menu`),
    burgerMenu = document.querySelector(`.burger`),
    burgerExit = document.querySelector(`.burger-exit`);

burgerMenu.addEventListener(`click`, ()=> {
    navBar.classList.add(`active`);
})

burgerExit.addEventListener(`click`, ()=> {
    navBar.classList.remove(`active`);
})

const cryptoBitcoin = document.querySelectorAll(`.crypto-bitcoin`);

cryptoBitcoin.forEach(item => {
    item.addEventListener(`click`, () => {
        removeBg(cryptoBitcoin);
        item.classList.add(`bg`);
    })
})

function removeBg(array){
    array.forEach(element => {
        element.classList.remove(`bg`);
    })
}