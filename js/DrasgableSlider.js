export const slider = document.querySelector('.images__sliderBox');
export const innerSlider = document.querySelector('.images__innerList');


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
}

export const mouseMove = (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`

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


//  Test Code //

// const hoverEfect = (e) => {

//     console.log(e.target)
//    items.forEach(item => {
//     item.addEventListener('touchstart', (e) => {
//         e.target.classList.add('hover');
//     });
//     item.addEventListener('touchend', (e) => {
//         e.target.classList.remove('hover');
//     });
// });
// };

// // items.forEach((item) =>{
// //     item.addEventListener('click', hoverEfect)
// // })
//  window.addEventListener('click', hoverEfect)

const hoverEfect = (e) => {
    console.log(e.currentTarget)
    items.forEach(item => {
        item.addEventListener('touchstart', (e) => {
            e.currentTarget.classList.add('hover');
        });
        item.addEventListener('touchend', (e) => {
            e.currentTarget.classList.remove('hover');
        });
    });
};
slider.addEventListener('click', hoverEfect);