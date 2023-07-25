let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

const toTop = document.querySelector(".to-top");

const 


menu.addEventListener("click", function(){
   navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

 
