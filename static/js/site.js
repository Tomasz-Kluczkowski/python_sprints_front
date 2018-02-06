function openNav() {
    $(".full-screen-nav__bar").css("background-color", "transparent");
    $(".full-screen-nav__overlay").css("width", "100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $(".full-screen-nav__bar").css("background-color", "#ffffff");
    $(".full-screen-nav__overlay").css("width", "0%");
}