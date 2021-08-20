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

    styleMainDiv(hasTouchScreen)
    styleFont(hasTouchScreen)
    styleButtons(hasTouchScreen)
}

// helper function to style main div
function styleMainDiv(isMobile) {
    if (!isMobile) {
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

// helper function to style font
function styleFont(isMobile) {
    if (!isMobile) {
        document.getElementById("bio").style.fontSize = "1.1em"
    }
    else {
        document.getElementById("name").style.fontSize = "60px"
        document.getElementById("bio").style.fontSize = "30px"
    }
}

// helper function to style buttons
function styleButtons(isMobile) {
    if (isMobile) {
        var linkButtons = document.getElementsByClassName("link-button")
        for (var i=0; i < linkButtons.length; i++) {
            linkButtons[i].style.width = "300px";
            linkButtons[i].style.height = "300px";
            linkButtons[i].style.fontSize = "2em";
        }
        var linkButtonContent = document.getElementsByClassName("link-button-content")
        for (var i=0; i < linkButtonContent.length; i++) {
            linkButtonContent[i].style.marginTop = "100px";
        }
    }
}