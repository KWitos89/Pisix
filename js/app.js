const burger = document.querySelector('.nav__burgerBtn');
const menu = document.querySelector('.nav__menu');
const searchBox = document.querySelector('.nav__serachBox');
const searchBtn = document.querySelector('.nav__searchBtn');
const bodyEl = document.body;



//  Animaited Button Burger //

const clickBurgerBtn = () => {
    if (burger.classList.contains('active')) {

        burger.classList.toggle('no__active')

    } else {

        burger.classList.add('active')
    };
};

//  Body Overflow When Menu Active //

const overflow = () => {
    bodyEl.classList.toggle('body-overflow')
}

// Open Mobile Menu //

const openMenu = () => {
    menu.classList.toggle('active__menu')

    clickBurgerBtn()
    overflow()
}

// Close Menu Mobile Click Outside //

const closeOutside = (e) => {

    if (menu.classList.contains('active__menu')) {

        if (!menu.contains(e.target))

            openMenu()

        if (burger.contains(e.target))
            openMenu()
    }
}

//  Close Menu When Chang Siaze Screen //

const resize = () => {
    if (this.innerWidth >= 930) {
        openMenu()
    }
}

//  Open Search Box //

const openSearch = () => {
    searchBox.classList.toggle('nav__serachBox--active');
};

// Close SearchBox Click Outsie //

const closeOutsideSearchBox = (e) => {

    if (searchBox.classList.contains('nav__serachBox--active')) {

        if (!searchBox.contains(e.target))

            openSearch()
    }
}

window.addEventListener('resize', resize);
document.addEventListener('mouseup', closeOutsideSearchBox);
searchBtn.addEventListener('click', openSearch);
document.addEventListener('mouseup', closeOutside);
burger.addEventListener('click', openMenu);