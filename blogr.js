window.onload = ham;
var ham = document.getElementById("hamburger");
var overlay = document.getElementById("overlay");
var body = document.body;


//When the hamburger menu is clicked it triggers the image changer function
// This function changes the hmburger icon as well as displays the overlay
// Hamburger menu funtion
ham.addEventListener("click", function() {

    var img = document.getElementById("hamburger");
  
    if (overlay.classList.contains("show")) { //hamberger is closed
        overlay.classList.remove("show");
        img.src="images/icon-hamburger.svg";
        overlay.style.display = "none";
        body.classList.remove("noscroll");
        // document.body.style.position = "";
        
    } else {
        overlay.classList.add("show"); // hamburger is open
        img.src = "images/icon-close.svg";
        overlay.style.display = "block";
        body.classList.add("noscroll");
        // document.body.style.position = "fixed";

    }

});  



// Function for overlay content
let drop1 = document.getElementById("mobile-dropdown1");
let cont1 = document.getElementById("content1");

let drop2 = document.getElementById("mobile-dropdown2");
let cont2 = document.getElementById("content2");

let drop3 = document.getElementById("mobile-dropdown3");
let cont3 = document.getElementById("content3");


drop1.addEventListener("click", function() {
    if(cont1.classList.contains("show")){
        cont1.classList.remove("show");
        cont1.style.display = "none";
    }else{
        cont1.classList.add("show");
        cont1.style.display = "block";
    }
});


drop2.addEventListener("click", function() {
    if(cont2.classList.contains("show")){
        cont2.classList.remove("show");
        cont2.style.display = "none";
    }else{
        cont2.classList.add("show");
        cont2.style.display = "block";
    }
});


drop3.addEventListener("click", function() {
    if(cont3.classList.contains("show")){
        cont3.classList.remove("show");
        cont3.style.display = "none";
    }else{
        cont3.classList.add("show");
        cont3.style.display = "block";
    }
});