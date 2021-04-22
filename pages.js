window.onload = init;

function init() {
    initMouseClick();
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

    closeOnClick("left");
    closeOnClick("right");

    openOnClick("one", "chapter-one", "slide-up");
    openOnClick("one", "container", "fade-out");

    openOnClick("two", "chapter-two", "slide-up");
    openOnClick("two", "container", "fade-out");

    openOnClick("three", "chapter-three", "slide-up");
    openOnClick("three", "container", "fade-out");

    openOnClick("four", "chapter-four", "slide-up");
    openOnClick("four", "container", "fade-out");
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
        window.setTimeout(() => document.getElementsByClassName(className)[0].classList.add(cssClassName), 200);
    });
}

function toggleMute(id) {
    const video = document.getElementById(id);
    video.muted = !video.muted;
}

$(document).ready(function () {
    var $draggables = $(".draggable").draggabilly({
        containment: false
    });
    $(".content.one").on("scroll", function () {
        var pixels = $(".content.one").scrollTop()
        if (pixels < 2500) {
            $(".content.one").css("background-color", "#fff");
        } else {
            $(".content.one").css("background-color", "#0c0c0c")
        };
    });
    $(".content.two").on("scroll", function () {
        var pixels = $(".content.two").scrollTop()
        console.log(pixels)
        if (pixels < 2500) {
            $(".content.two").css("background-color", "#fff")
        } else {
            $(".content.two").css("background-color", "#0c0c0c")
        };
    });
    $(".content.three").on("scroll", function () {
        var pixels = $(".content.three").scrollTop()
        console.log(pixels)
        if (pixels < 2300) {
            $(".content.three").css("background-color", "#fff")
        } else {
            $(".content.three").css("background-color", "#0c0c0c")
        };
    });
});