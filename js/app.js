const burger = document.querySelector('.nav__burgerBtn');
const menu = document.querySelector('.nav__menu');
const searchBox = document.querySelector('.nav__serachBox');
const searchBtn = document.querySelector('.nav__searchBtn');
const bodyEl = document.body;

const slider = document.querySelector('.images__sliderBox');
const innerSlider = document.querySelector('.images__innerList');
const sliderItems = document.querySelectorAll('.images__items');


//  Dragablr Slider Fuction For Images Section //
let pressed = false;
let startx;
let x;

const mouseDown = (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
};
const mouseEnter = () => {
    slider.style.cursor = 'grab'
};


const mouseUp = () => {
    slider.style.cursor = 'grab'
    
};

const press = () => {
    pressed = false;
}

const mouseMove = (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`

    checkBoundry();
};

const checkBoundry = () => {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px'
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
};

slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mouseenter', mouseEnter);
slider.addEventListener('mouseup', mouseUp);
slider.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', press);

//  Mobile Fuction //
const touchStart = (e) => {
    pressed = true;
    startx = e.touches[0].clientX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
};

const touchMove = (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.touches[0].clientX;
    innerSlider.style.left = `${x - startx}px`;
    checkBoundry();
};

const touchEnd = () => {
    pressed = false;
    slider.style.cursor = 'grab'
};


slider.ontouchstart = touchStart;
slider.ontouchmove = touchMove;
slider.ontouchend = touchEnd;



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