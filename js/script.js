const navBar = document.querySelector(`.navbar-menu`),
    burgerMenu = document.querySelector(`.burger`),
    burgerExit = document.querySelector(`.burger-exit`)

burgerMenu.addEventListener(`click`, ()=> {
    navBar.classList.add(`active`);
})

burgerExit.addEventListener(`click`, ()=> {
    navBar.classList.remove(`active`);
})

// const cryptoCoin = document.querySelectorAll(`.crypto-bit`),
//     cryptoLink = document.querySelectorAll(`.crypto-bitcoin__link`),
//     cryptoTitle = document.querySelectorAll(`.crypto-bitcoin__title`),
//     cryptoSub = document.querySelectorAll(`.crypto-bitcoin__subtitle`);

// cryptoCoin.forEach(item => {
//     item.addEventListener(`mouseover`, () => {
//         item.style.background = `#2B076E`;
//         item.style.backdropFilter = `blur(250px)`;
//         item.style.transition = `0.5s`;
//         cryptoTitle.forEach(title => {
//             title.style.color = `#FFFFFF`;
//         })
//         cryptoSub.forEach(subTitle => {
//             subTitle.style.color = `#FFFFFF`;
//         })
//         cryptoLink.forEach(elem => {
//             elem.classList.add(`btn`);
//             elem.innerHTML = `Start mining`;
//         })
//     })
//     item.addEventListener(`mouseout`, () => {
//         item.style.background = `#FFFFFF`;
//         item.style.backdropFilter = `none`;
//         item.style.transition = `0.5s`;
//         cryptoTitle.forEach(title => {
//             title.style.color = `#bdbdbd`;
//         })
//         cryptoSub.forEach(subTitle => {
//             subTitle.style.color = `#828282`;
//         })
//         cryptoLink.forEach(elem => {
//             elem.classList.remove(`btn`);
//         })
//     })
// })