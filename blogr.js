window.onload = ham;
var ham = document.getElementById("hamburger");
var overlay = document.getElementById("overlay");
var body = document.body;

// var dropdown = document.getElementById("dropdown");
// var content = doccument.getElementById("content");
// overlay.classList.contains("showOverlay");

//When the hamburger menu is clicked it triggers the image changer function
// This function changes the hmburger icon as well as displays the overlay


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

    // dropdown.addEventListener("click", function() {

        // if(content.classList.contains("show")) {
            // content.classList.remove("show");
            // content.style.display = "none";
        // } else {
            // content.classList.add("show");
            // content.style.display = "block";
        // }
    // });
    

});  











