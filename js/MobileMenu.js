export const burger = document.querySelector('.nav__burgerBtn');
export const menu = document.querySelector('.nav__menu');
export const bodyEl = document.body;

//  Animaited Button Burger //

export const clickBurgerBtn = () => {
    if (burger.classList.contains('active')) {

        burger.classList.toggle('no__active')

    } else {

        burger.classList.add('active')
    };
};

// //  Body Overflow When Menu Active //

export const overflow = () => {
    bodyEl.classList.toggle('body-overflow')
}

// // Open Mobile Menu //

export const openMenu = () => {
    menu.classList.toggle('active__menu')

    clickBurgerBtn()
    overflow()
}

// Close Menu Mobile Click Outside //

export const closeOutside = (e) => {

    if (menu.classList.contains('active__menu')) {

        if (!menu.contains(e.target))

            openMenu()

        if (burger.contains(e.target))
            openMenu()
    }
}

//  Close Menu When Chang Siaze Screen //


const resize = () => {


    if (window.innerWidth > 665) {
        menu.classList.remove('active__menu')
        clickBurgerBtn()
    }
};


window.addEventListener('resize', resize);
document.addEventListener('mouseup', closeOutside);
burger.addEventListener('click', openMenu);