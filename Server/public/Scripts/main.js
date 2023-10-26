// Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Toggle color of nav button on click

    burger.classList.toggle('nav-invert');
    // burger.classList.remove('nav-invert');
})

let viewportWidth = window.innerWidth;
const logo = document.getElementById('logo');

function logoInvert () {
    if (viewportWidth <= 1024){
        logo.setAttribute('src', 'Media/logowhite.PNG')
    } 
}

logoInvert();

// Drop down items

function toggleClass( element ) {
    let data = 'dataHeader hidden';

    if ( element.className == data){
        element.className = data.replace('hidden', 'active');
    } else {
        element.className = data;
    }
}


// Mobile click for product card

const flipCard = document.querySelectorAll('.flip-card-inner').forEach(flipCard => {

    flipCard.addEventListener('click', ()=> {

        function flip() {
            flipCard.classList.toggle("flipCardMobile");
        }

        flip();
    
})

});






































// horizontal scrolling

// const scrollContainer = document.querySelector(".photo");

// using deltaY property of scrollContainer object to convert amount traveled in Y direction to same amount traveled, but in the X direction
// positive = user scrolling up

// scrollContainer.addEventListener("wheel", (normalScroll) => {
//   normalScroll.preventDefault();

//   scrollContainer.scrollBy({
//     left: normalScroll.deltaY < 0 ? -30 : 30,
//   })
// });








