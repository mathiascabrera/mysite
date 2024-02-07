var menu_visible = false;
var menu = document.getElementById("nav");

function showHideMenu(){
    if(menu_visible == false){
        menu.style.display="grid";
        menu.style.placeItems="center";
        menu.style.zIndex=1;
        menu_visible = true;
    }
    else{
        menu.style.display="none";
        menu_visible = false;

    }
}


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