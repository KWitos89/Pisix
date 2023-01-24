
// let currentPosition = 0;
// const dots = document.querySelectorAll('.dot');
// const slider = document.querySelector('.team__sliderBox');
// const sliderInner = document.querySelector('.team__innerSlider');
// const sliderItems = document.querySelectorAll('.team__card');

// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     dots.forEach(d => {
//         if(d.classList.contains('dot--active')){
//             d.classList.remove('dot--active')
//         }
//     });
//     dot.classList.add('dot--active');
//     currentPosition = index;
//     sliderInner.style.transform = `translateX(-${currentPosition * 266}px)`;
//   });
// });

// slider.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     if(e.deltaY < 0) {
//         if (currentPosition > 0) {
//             currentPosition--;
//             sliderInner.style.transform = `translateX(-${currentPosition * 266}px)`;
//             dots.forEach(d => {
//                 if(d.classList.contains('dot--active')){
//                     d.classList.remove('dot--active')
//                 }
//             });
//             dots[currentPosition].classList.add('dot--active');
//         }
//     } else {
//         if (currentPosition < sliderItems.length - 1) {
//             currentPosition++;
//             sliderInner.style.transform = `translateX(-${currentPosition * 266}px)`;
//             dots.forEach(d => {
//                 if(d.classList.contains('dot--active')){
//                     d.classList.remove('dot--active')
//                 }
//             });
//             dots[currentPosition].classList.add('dot--active');
//         }
//     }
// });

let currentPosition = 0;
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.team__sliderBox');
const sliderInner = document.querySelector('.team__innerSlider');
const sliderItems = document.querySelectorAll('.team__card');



dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => {
        if(d.classList.contains('dot--active')){
            d.classList.remove('dot--active')
        }
    });
    dot.classList.add('dot--active');
    currentPosition = index;
    // Change the value of translateX to match the width of the team__card
    sliderInner.style.transform = `translateX(-${currentPosition * sliderItems[0].offsetWidth + 16}px)`;
  });
});

slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    if(e.deltaY < 0) {
        if (currentPosition > 0) {
            currentPosition--;
            sliderInner.style.transform = `translateX(-${currentPosition * sliderItems[0].offsetWidth + 16}px)`;
            dots.forEach(d => {
                if(d.classList.contains('dot--active')){
                    d.classList.remove('dot--active')
                }
            });
            dots[currentPosition].classList.add('dot--active');
        }
    } else {
        if (currentPosition < sliderItems.length - 1) {
            currentPosition++;
            sliderInner.style.transform = `translateX(-${currentPosition * sliderItems[0].offsetWidth - 16}px)`;
            dots.forEach(d => {
                if(d.classList.contains('dot--active')){
                    d.classList.remove('dot--active')
                }
            });
            dots[currentPosition].classList.add('dot--active');
        }
    }
});
