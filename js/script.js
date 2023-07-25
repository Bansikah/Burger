let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

const toTop = document.querySelector(".to-top");

const cookie_box = document.getElementById("cookie_box");
const activeBtn = document.getElementById("activeBtn");

// menu section
menu.addEventListener("click", function(){
   navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

// scroll section
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

// cookie section
activeBtn.addEventListener("click", function(){
    ///utc is time set by the world standard
    document.cookie = "CookieBy=InventionTricks; expires="+ new Date(2024,0,1).toUTCString();
     //This cookie expires in 2024
    document.cookie = "Name=Noel; max-age="+60*60*24*30;
    document.cookie = "LastName=Bansikah; max-age="+60*60*24*30;

    if(document.cookie){
        cookie_box.classList.add("hide");
    }
    else{
        //If cookie setting is blocked show the message
        alert("Cookie no set! Please allow this site from your browser cookie settings");

    }
});

function getCookieName(name){
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1]:'';
}

var getCookieName = getCookieName('CookieBy');

if(getCookieName == 'InventionTricks'){
    //All time hide cookie popups
    cookie_box.classList.add("hide");
}
 
