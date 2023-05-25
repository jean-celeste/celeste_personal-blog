const parallax_home = document.getElementById("home");
const parallax_homeContent = document.getElementById("homeCont");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    home.style.backgroundPositionY = offset * 0.7 + "px";

})
