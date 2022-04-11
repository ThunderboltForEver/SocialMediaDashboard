let getSpan = document.getElementById("move");
let getDarkMode = document.getElementById("darkMode");
let getValue = window.getComputedStyle(getSpan,"::before");
let changeBackgroundColor = document.getElementById("socialDashboardBackgroundColor");
getDarkMode.innerHTML = "Dark Mode";

getSpan.onclick = function () {
    if (getValue.left === "1px"){
    getSpan.style.setProperty("--zana", "34px");
    changeBackgroundColor.style.backgroundColor = "#14010e";
    getDarkMode.innerHTML = "Purple Mode";
}
    else {
        getSpan.style.setProperty("--zana", "1px");
        changeBackgroundColor.style.backgroundColor = "rgb(0,0,0)";
        getDarkMode.innerHTML = "Dark Mode";
    }
}