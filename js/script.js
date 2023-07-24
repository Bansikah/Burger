let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

const toTop = document.querySelector(".to-top");

let cookieModal = document.querySelector(".content");
let cancelCookieBtn = document.querySelector(".btn.cancel");
let acceptCookieBtn = document.querySelector(".btn.accept");

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

cancelCookieBtn.addEventListener("click", function(){
     cookieModal.classList.remove("active");
})

acceptCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active");
    localStorage.setItem("cookieAccepted", "yes");
})
 
setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccept")
    if(cookieAccepted != "yes"){
        cookieModal.classList.add("active");
    }
}, 2000)