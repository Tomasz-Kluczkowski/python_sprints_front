var buttonOpenContainer = $(".navigation__button-open-container");
var hamburgerBar = $(".navigation__hamburger-bar");
var navigationOverlay = $(".navigation__overlay");
var buttonCloseContainer = $(".navigation__button-close-container");

function openNav() {
    buttonOpenContainer.css("pointer-events", "none");
    buttonOpenContainer.toggle(500, showCloseButton);
    hamburgerBar.css("background-color", "transparent");
    navigationOverlay.css("width", "100%");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    hamburgerBar.css("background-color", "#ffffff");
    navigationOverlay.css("width", "0%");
    buttonOpenContainer.css("display", "inline");
    buttonOpenContainer.css("pointer-events", "auto");
    buttonCloseContainer.css("display", "none");
}

function showCloseButton() {
    buttonCloseContainer.css("display", "inline");
}