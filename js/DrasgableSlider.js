export const slider = document.querySelector('.images__sliderBox');
export const innerSlider = document.querySelector('.images__innerList');
export const items = document.querySelectorAll('.images__items');


//  Dragablr Slider Fuction For Images Section //
export let pressed = false;
export let startx;
export let x;

export const mouseDown = (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
};

export const mouseEnter = () => {
    slider.style.cursor = 'grab'
};

export const mouseUp = () => {
    slider.style.cursor = 'grab'
};

export const press = () => {
    pressed = false;
     slider.style.cursor = 'grab'
}

export const mouseMove = (e) => {
    if (!pressed) return;
    e.preventDefault();

    innerSlider.style.left = `${e.offsetX - startx}px`
    checkBoundry();
};

export const checkBoundry = () => {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = 0;
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
};

//  Hover Effect Function //
items.forEach((item) => {

    item.addEventListener('mouseover', function (e) {
        e.target.classList.toggle('images__items--hover');
        removeHover()
    });

    item.addEventListener('mouseout', function (e) {
        e.target.classList.toggle('images__items--hover');
    });
});

const removeHover = (e) => {
    items.forEach((ite) => {
        if (ite.classList.contains('images__items--hover')) {
            ite.classList.remove('images__items--hover')
        }
    })
}

//  Mobile Fuction //
export const touchStart = (e) => {
    pressed = true;
    startx = e.touches[0].clientX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';

};

export const touchMove = (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.touches[0].clientX;
    innerSlider.style.left = `${x - startx}px`;

    checkBoundry();
};

export const touchEnd = () => {
    pressed = false;
    slider.style.cursor = 'grab'
};


export const updateSlider = () => {

    let width = window.innerWidth;
    if (width > 760) {
        slider.removeEventListener('mousedown', mouseDown);
        slider.removeEventListener('mouseenter', mouseEnter);
        slider.removeEventListener('mouseup', mouseUp);
        slider.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('mouseup', press);
        slider.ontouchstart = null;
        slider.ontouchmove = null;
        slider.ontouchend = null;
    } else {
        slider.addEventListener('mousedown', mouseDown);
        slider.addEventListener('mouseenter', mouseEnter);
        slider.addEventListener('mouseup', mouseUp);
        slider.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', press);
        slider.ontouchstart = touchStart;
        slider.ontouchmove = touchMove;
        slider.ontouchend = touchEnd;
    }
}




slider.ontouchstart = touchStart;
slider.ontouchmove = touchMove;
slider.ontouchend = touchEnd;
slider.addEventListener('mousedown', mouseDown);
slider.addEventListener('mouseenter', mouseEnter);
slider.addEventListener('mouseup', mouseUp);
slider.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', press);
window.addEventListener('onresize', updateSlider);
