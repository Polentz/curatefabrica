window.onload = init;

function init() {
    initMouseMovement();
    initMouseClick();
}

function initMouseMovement() {
    handleMouseById("portrait", "portrait-img", "visible");
    handleMouseById("creative", "creative-img", "visible");
    handleMouseById("daydreamer", "daydreamer-img", "visible");
    handleMouseById("space", "space-img", "visible");
    handleMouseById("logo-type", "line", "change");
    handleMouseByClassName("about", "left-info", "bounce");
}

function initMouseClick() {
    toggleClassOnClick("left-label", "left-info", "move");
    toggleClassOnClick("left-label", "left-label", "bg");
    toggleClassOnClick("left-label", "left-anchor", "color");
    toggleClassOnClick("left-label", "copy", "blur");
    toggleClassOnClick("left-label", "left-close", "active");

    toggleClassOnClick("right-label", "right-info", "move");
    toggleClassOnClick("right-label", "right-label", "bg");
    toggleClassOnClick("right-label", "right-anchor", "color");
    toggleClassOnClick("right-label", "copy", "blur");
    toggleClassOnClick("right-label", "right-close", "active");

    toggleClassOnClick("about", "left-info", "move");
    toggleClassOnClick("about", "left-label", "bg");
    toggleClassOnClick("about", "left-anchor", "color");
    toggleClassOnClick("about", "copy", "blur");
    toggleClassOnClick("about", "left-close", "active");

    closeOnClick("left");
    closeOnClick("right");

    openOnClick("one", "content", "hide");
    openOnClick("one", "chapter-one", "slide-up");
    openOnClick("one", "container", "fade-out");

    openOnClick("two", "content", "hide");
    openOnClick("two", "chapter-two", "slide-up");
    openOnClick("two", "container", "fade-out");

    openOnClick("three", "content", "hide");
    openOnClick("three", "chapter-three", "slide-up");
    openOnClick("three", "container", "fade-out");

    openOnClick("four", "content", "hide");
    openOnClick("four", "chapter-four", "slide-up");
    openOnClick("four", "container", "fade-out");
}

function handleMouseById(className, element, cssClassName) {
    document.getElementsByClassName(className)[0].addEventListener("mouseenter", () => {
        document.getElementById(element).classList.add(cssClassName);
    });
    document.getElementsByClassName(className)[0].addEventListener("mouseleave", () => {
        document.getElementById(element).classList.remove(cssClassName);
    });
}

function handleMouseByClassName(className, element, cssClassName) {
    document.getElementsByClassName(className)[0].addEventListener("mouseenter", () => {
        document.getElementsByClassName(element)[0].classList.add(cssClassName);
    });
    document.getElementsByClassName(className)[0].addEventListener("mouseleave", () => {
        document.getElementsByClassName(element)[0].classList.remove(cssClassName);
    });
}

function toggleClassOnClick(className, element, cssClassName) {
    document.getElementsByClassName(className)[0].addEventListener("click", (event) => {
        document.getElementsByClassName(element)[0].classList.toggle(cssClassName);
        event.stopPropagation();
    });

}

function closeOnClick(direction) {
    document.getElementsByClassName("main")[0].addEventListener("click", (event) => {
        if (document.getElementsByClassName(`${direction}-info`)[0].classList.contains("move")) {
            document.getElementsByClassName(`${direction}-info`)[0].classList.remove("move");
            document.getElementsByClassName(`${direction}-label`)[0].classList.remove("bg");
            document.getElementsByClassName(`${direction}-anchor`)[0].classList.remove("color");
            document.getElementsByClassName("copy")[0].classList.toggle("blur");
            document.getElementsByClassName(`${direction}-close`)[0].classList.remove("active");
            event.stopPropagation();
        }
    });
}

function openOnClick(number, className, cssClassName) {
    document.getElementById(`trigger-${number}`).addEventListener("click", () => {
        document.getElementsByClassName(className)[0].classList.add(cssClassName);
        window.setTimeout(() => document.getElementsByClassName(className)[0].classList.add(cssClassName), 400);
        window.setTimeout(() => document.getElementsByClassName(className)[0].classList.add(cssClassName), 800);
        setTimeout(function () { location.href = "2017.html" }, 1000);
    });
}

$(document).ready(function () {

    var musicB = document.createElement("audio");
    musicB.src = "media/Running-Up-That-Hill.mp3";
    musicB.volume = 0.7;
    musicB.autoPlay = false;
    musicB.loop = true;
    musicB.preLoad = true;
    $(".colored.bush").on("click", function () {
        $(this).toggleClass("animated");
        if (musicB.paused == false) {
            musicB.pause();
        } else {
            musicB.play();
        }
    });

    var musicJ = document.createElement("audio");
    musicJ.src = "media/No.mp3";
    musicJ.volume = 0.7;
    musicJ.autoPlay = false;
    musicJ.loop = true;
    musicJ.preLoad = true;
    $(".colored.jaar").on("click", function () {
        $(this).toggleClass("animated");
        if (musicJ.paused == false) {
            musicJ.pause();
        } else {
            musicJ.play();
        }
    });

});
