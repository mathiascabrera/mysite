//nav-bar scroll
window.addEventListener("scroll",function(){
    let navBar = this.document.getElementById("navbar");
    let iconNavBar = this.document.getElementById("iconNav");

    if(this.window.scrollY>=310){
        navBar.style.border = "0.2rem solid rgba(195, 195, 195,0.4)";
        navBar.style.backgroundColor = "rgba(0, 3, 9,0.6)";
        navBar.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, *)";
        iconNavBar.style.color= "#c3c3c3";
    }
    if(this.window.scrollY>=1850){
        navBar.style.border = "0.2rem solid rgba(195, 195, 195,0.4)";
        navBar.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0)";
        iconNavBar.style.color= "#1b1b1b";
    }
    if(this.window.scrollY<310){
        navBar.style.border = "0.2rem solid rgba(0, 3, 9,0.4)";
        navBar.style.backgroundColor = "rgba(244, 244, 246,0.8)";
        navBar.style.boxShadow = "0 0.8rem 3.2rem 0 rgba(0, 3, 9, 0.4)";
        iconNavBar.style.color= "#000309";
    }
})

//menu visibility
var menu_visible = false;
var menu = document.getElementById("nav");

function showHideMenu(){
    if(menu_visible == false){
        menu.style.display="flex";
        menu.style.justifyContent="center";
        menu.style.placeItems="center";
        menu.style.zIndex=100;
        menu_visible = true;
    }
    else{
        menu.style.display="none";
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
const scrollers = document.querySelector(".scroller");

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