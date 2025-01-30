
const authorContainer = document.querySelector('.author')
const iconShare = document.getElementById("share");
const shareBox = document.querySelector(".share");
const mobile = document.querySelector(".mobile");
const mediaScreen = window.matchMedia("(max-width: 748px)");

function toggleShare() {
    if (mediaScreen.matches) {

        mobile.classList.toggle("hidden");
        mobile.classList.toggle("visible");
        authorContainer.classList.add("hidden")
        authorContainer.classList.remove("visible")
    } else {

        shareBox.classList.toggle("hidden");
        shareBox.classList.toggle("visible");
        authorContainer.classList.add("visible")
        authorContainer.classList.remove("hidden")
    }
}


iconShare.addEventListener("click", toggleShare);


function initView() {
    if (mediaScreen.matches) {

        mobile.classList.add("hidden");
        mobile.classList.remove("visible");
        shareBox.classList.add("hidden");
        shareBox.classList.remove("visible");
    } else {

        shareBox.classList.add("hidden");
        shareBox.classList.remove("visible");
        mobile.classList.add("hidden");
        mobile.classList.remove("visible");
    }
}


initView();
