function openNav() {
    $(".bar").css("background-color", "transparent");
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $(".bar").css("background-color", "#ffffff");
    document.getElementById("myNav").style.width = "0%";
}