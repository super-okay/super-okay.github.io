// opens link
function openLink(element) {
    var id = element.id
    if (id === "github") {
        window.open("https://github.com/super-okay", '_blank');
    }
    else if (id === "linkedin") {
        window.open("https://www.linkedin.com/in/allen-n-wang/", '_blank');
    }
    else if (id === "photography") {
        window.open("https://www.flickr.com/photos/ramenoverdose/albums/72157696885465250", '_blank');
    }
    else if (id === "instagram") {
        window.open("https://www.instagram.com/superokay.img/", '_blank');
    }
}

// checks for mobile browser using touch points
function checkMobile() {
    var hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    }
    else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
    }

    if (!hasTouchScreen) {
        document.getElementById("main-div").style.boxShadow = "8px 8px 16px 0 rgba(0, 0, 0, 0.25), -4px -4px 12px 0 rgba(101, 101, 101, 0.3)";
        document.getElementById("main-div").style.borderRadius = "15px";
        document.getElementById("main-div").style.margin = "auto";
        document.getElementById("main-div").style.marginTop = "10vh";
        document.getElementById("main-div").style.padding = "20px";
        document.getElementById("main-div").style.maxWidth = "1024px";
        document.getElementById("main-div").style.minHeight = "500px";
    }
    else {
        document.getElementById("main-div").style.margin = "auto";
        document.getElementById("main-div").style.marginTop = "10vh";
        document.getElementById("main-div").style.padding = "20px";
    }
}