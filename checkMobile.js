var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
}
else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
}

if (hasTouchScreen) {
    document.getElementById("main-div").style.boxShadow = "none";
    document.getElementById("main-div").style.borderRadius = "0";
    document.getElementById("main-div").style.boxShadow = "none";
    document.getElementById("main-div").style.margin = "auto";
    document.getElementById("main-div").style.marginTop = "10vh";
    document.getElementById("main-div").style.padding = "20px";
}