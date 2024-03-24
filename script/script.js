//nav-bar scroll
let menu_visible = false;
let menu = document.getElementById("nav");
let iconHamburger = document.getElementById("iconNav");
let iconX = document.getElementById("iconNavX");
let containIcon = document.getElementById("navbar");

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let scrollPosition = (window.scrollY - 370);

      let sectionPresentation = document.getElementById('presentation').offsetTop;
      let sectionWorkExperience = document.getElementById('workexperience').offsetTop;
      let sectionCoursesTaken = document.getElementById('coursestaken').offsetTop;
      let sectionProjects = document.getElementById('myprojects').offsetTop;
      let sectionTechnologies = document.getElementById('technologies').offsetTop;
      let sectionFooter = document.getElementById('footer').offsetTop;
        
    if (scrollPosition > sectionPresentation) {
        containIcon.style.border = "0.2rem solid rgba(195, 195, 195,0.4)";
        containIcon.style.backgroundColor = "rgba(7, 8, 10,0.8)";
        containIcon.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, *)";
        iconHamburger.style.color= "#f4f4f6";
    }
    if (scrollPosition > sectionProjects) {
        containIcon.style.border = "0.2rem solid rgba(0, 3, 9,0.4)";
        containIcon.style.backgroundColor = "rgba(244, 244, 246, 0.8)";
        containIcon.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0.4)";
        iconHamburger.style.color= "#000309";
    }
    if (scrollPosition > sectionTechnologies) {
        containIcon.style.border = "0.2rem solid rgba(0, 3, 9,0.4)";
        containIcon.style.backgroundColor = "rgba(255, 255, 252, 0.8)";
        containIcon.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0.4)";
        iconHamburger.style.color= "#000309";
    }
    if (scrollPosition > (sectionFooter-450)) {
        containIcon.style.border = "0.2rem solid rgba(195, 195, 195,0.4)";
        containIcon.style.backgroundColor = "rgba(7, 8, 10,0.8)";
        containIcon.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, *)";
        iconHamburger.style.color= "#f4f4f6";
    }
    if (scrollPosition < sectionPresentation) {
        containIcon.style.border = "0.2rem solid rgba(0, 3, 9,0.4)";
        containIcon.style.backgroundColor = "rgba(244, 244, 246,0.8)";
        containIcon.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0.4)";
        iconHamburger.style.color= "#000309";
    }
    })});

//menu visibility
function showHideMenu(){
    if(menu_visible == false){
        iconHamburger.style.display="none";
        iconX.style.display="block";
        menu.style.display="block";
        menu.style.zIndex=100;
        containIcon.style.backgroundColor= "transparent";
        containIcon.style.backdropFilter="none";
        containIcon.style.border="0";
        containIcon.style.boxShadow= "0 0 0 0";
        containIcon.style.borderRadius="0";
        
        menu.addEventListener('click', function() {
            menu.style.display = 'none';
            iconHamburger.style.display="block";
            iconX.style.display="none";
            menu.style.display="none";
            containIcon.style.backdropFilter="blur(1px)";
            containIcon.style.border="0.2rem solid rgba(0, 3, 9,0.4)";
            containIcon.style.boxShadow= "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0.1)";
            containIcon.style.borderRadius="50%";
            menu_visible = false;
        });
        menu_visible = true;
    }
    else{
        iconHamburger.style.display="block";
        iconX.style.display="none";
        menu.style.display="none";
        containIcon.style.backdropFilter="blur(1px)";
        containIcon.style.border="0.2rem solid rgba(0, 3, 9,0.4)";
        containIcon.style.boxShadow= "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0.1)";
        containIcon.style.borderRadius="50%";
        menu_visible = false;
    }
}

//carousel workexperience
const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0,
    counter = 0,
    withImg = 100 / sliderSection.length;

function moveToRight(){
    if(counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operacion = operacion + withImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}
function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length-1;
        operacion = withImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - withImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

//Carousel Technology
//infinite horizontal scroll
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
});