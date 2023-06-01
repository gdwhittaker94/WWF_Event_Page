//* PAGE LINKS DROPDOWN MENU

const dropDown = document.querySelector('.navbar__middle');
let isDropdownVisible = false;

function clickHandler() {
    isDropdownVisible ? dropDown.children[1].style.display = 'none' : dropDown.children[1].style.display = 'block';
    isDropdownVisible = !isDropdownVisible;

    // Longhand
    // if (isDropdownVisible === false) {
    //     dropDown.children[1].style.display = 'block';
    //     isDropdownVisible = true;
    // } else if (isDropdownVisible === true) {
    //     dropDown.children[1].style.display = 'none'
    //     isDropdownVisible = false;
    // }
}

dropDown.addEventListener('click', clickHandler)

//* IMAGE CAROUSEL

const slider = document.querySelector('.carousel__slider');
const leftArrow = document.querySelector('.carousel__arrow--left');
const rightArrow = document.querySelector('.carousel__arrow--right');
const circleButtonsParent = document.querySelector('.carousel__circles');
let sectionIndex = 0;

// Slider
function setIndex() {
    document.querySelector('.selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -16.67 + '%)';
}

leftArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    circleButtonsParent.children[sectionIndex].classList.add('selected');
})

rightArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex < 5) ? sectionIndex + 1 : 5;
    setIndex();
    circleButtonsParent.children[sectionIndex].classList.add('selected');
} )
// How this slider works: Moves the sections left & right 1/6 of the total slider width (600%), relative to the origin point on the left side of the slider. That is, a reduction in the index value = moving the entire slider and thus all the sections 16.65% to the left, giving the appearance of a moving carousel (and vice versa).

// Circle Buttons
document.querySelectorAll('.carousel__circleButton').forEach((circle, index) => {
    circle.addEventListener('click', () => {
        sectionIndex = index;
        setIndex();
        circle.classList.add('selected');
    });
});

//* COUNTDOWN CLOCK
// End Date
const endDate = new Date("October 8, 2023 12:00:00").getTime();

// Update counter every 1 second
const x = setInterval(function () {

    // Get today's date + time
    const now = new Date().getTime();

    // Find the difference between now and end date
    const difference = endDate - now;

    // Time calculations for days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in countdown element
    document.querySelector(".countdown").innerHTML = days + "D : " + hours + "H : " + minutes + "M : " + seconds + "S" + " " + "LEFT TO EVENT"

    // What's displayed when countdown finishes
    if (difference <= 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "Until next year!"
    }

}, 1000) //Interval of 1000 milliseconds (i.e. 1 second)