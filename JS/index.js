

window.onscroll = function (){scrollFunction()};
let nav = document.getElementById("nav-top");
let banner = document.querySelector(".banner-content");
let navTop = nav.offsetTop;

function scrollFunction() {
  if(document.documentElement.scrollTop > 30){
    nav.classList.add("sticky");
    banner.classList.add("sticky-content");
  }else{
    nav.classList.remove("sticky");
    banner.classList.remove("sticky-content");
  }
}
function transition(){
    document.getElementById("formbtn").style.transition = "background-color 0.5s linear";
}


//Show parts of the site on scrolling to the point in the site.

const bannerElement =  document.querySelectorAll(".banner-show");

const bannerAppear = () => {
    for(let x = 0; x < bannerElement.length; x++){
        bannerElement[x].classList.add("banner-scrolled");
    }
}

window.addEventListener("load", bannerAppear);

const appearShow = document.querySelectorAll(".scroll");
const appear = () => {
    for(let i = 0; i < appearShow.length; i++){
        const screenPosition = window.innerHeight;
        const elementPosition = appearShow[i].getBoundingClientRect().top;

        if(screenPosition > elementPosition){
            appearShow[i].classList.add("scrolled");
        }
        else{
            appearShow[i].classList.remove("scrolled");
        }
    }
}

window.addEventListener("scroll", appear);