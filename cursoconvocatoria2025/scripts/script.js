const btnSlide = document.getElementById('btn-slide');
const stepCards = document.getElementsByClassName('step-card');
let timeLapse = 0;
btnSlide.addEventListener('click', function(e) {
    gsap.to(window, { 
        duration: 1, 
        scrollTo: { y: 650 }, 
        ease: "power1.out"
    });
});

const buttons = document.getElementsByClassName('btn-payment-types');
const paymentInfo = document.getElementsByClassName('payment-info');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function(e) {

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('payment-types-active');

        }
        slidePaymentInfo(i);
    });
}

let lastScroll = 0;
let stepHover = -1;
const header = document.getElementById("header");
let scrollAcept = true;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.classList.add("hidden-bar");

    } else {
        header.classList.remove("hidden-bar");
    }
        if (currentScroll > 650){
        slideUp.disabled = false;
        slideUp.classList.add("slide-up-on");
    }else{
        slideUp.disabled = true;
        slideUp.classList.remove("slide-up-on");
    }
    
    lastScroll = currentScroll;

    if(lastScroll < 0){
        stepHover = -1;
    }else if(lastScroll < 1650){
        stepHover = 0;
    }else if(lastScroll < 1790){
        stepHover = 1;
    }else{
        stepHover = 2;
    }

    timeLapse = 0;
});

setInterval(() => {
    if(lastScroll > 800){
        if(timeLapse == 1){
            let steps =  stepHover == -1 ? 0 : stepHover;
            fillCardBar(steps);
        }

        timeLapse = (timeLapse <= 4) ? timeLapse += 1 : timeLapse;
    }
}, 250);

const lineCardBar = document.getElementsByClassName("line-card-bar");
const pointCard = document.getElementsByClassName("point-card");
let stepN = 0;
function fillCardBar(step){

    if(step > stepN){
        let cont = 0;
        for (let i = stepN; i < step; i++) {
            setTimeout(() => {
                pointCard[i].classList.add("point-card-selected");
                lineCardBar[i].style.blockSize = '100%';
            }, cont * 1000);

            cont++;
        }

        stepN = step;
    }else{
        let cont = 0;
        for (let i = (stepN - 1); step <= i ; i--) {
            setTimeout(() => {
                lineCardBar[i].style.blockSize = '0%';

                setTimeout(() => {
                    pointCard[i].classList.remove("point-card-selected");
                }, 800)

            }, cont * 1000)
            cont++;
        }
        stepN = step;
    }
}
/* Nuevo */
const slideUp = document.getElementById('slide-up');
slideUp.addEventListener('click', (e) => {
    gsap.to(window, { 
        duration: 2, 
        scrollTo: { y: 0 }, 
        ease: "power1.out"
    });
});


