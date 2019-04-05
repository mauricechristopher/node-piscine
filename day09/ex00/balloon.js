var color = {
    0: '#E74C3C',
    1: '#27AE60',
    2: '#3498DB'};

var colorIndex = 0;
var balloon;
var size = 200;
var pos = 20;

window.onload = function () {
    balloon = document.querySelector("#bal");
    balloon.addEventListener("click", balloonClick);
    balloon.addEventListener("mouseleave", balloonMouse);
}

function balloonMouse() {
    size -= 5;
    if (size < 200) {
        size = 200;
    }
    colorIndex--;
    if (colorIndex < 0) {
        colorIndex = 2;
    }
    balloonRefresh(colorIndex);
}

function balloonClick() {
    size += 10;
    if (size > 420) {
        size = 200;
    }
    colorIndex++;
    if (colorIndex > 2) {
        colorIndex = 0;
    }
    balloonRefresh(colorIndex);
}

function balloonRefresh(colorIndex) {
    balloon.style.height = size + 'px';
    balloon.style.width = size + 'px';
    balloon.style.backgroundColor = color[colorIndex];
}