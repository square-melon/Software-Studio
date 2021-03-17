function getRandom(max, min) {
    return Math.floor(Math.random() * max) + min;
}

var real;

function setup() {
    real = getRandom(3, 0);
    var colorRGB = [];
    for (let i = 0; i < 9; i++) colorRGB.push(getRandom(255, 0));

    document.getElementById("rgb").innerHTML = "RGB(" + colorRGB[real*3] + ", " + colorRGB[real*3+1] + ", " + colorRGB[real*3+2] + ")";
    document.getElementById("first").style.backgroundColor = "#" + colorRGB[0].toString(16) + colorRGB[1].toString(16) + colorRGB[2].toString(16);
    document.getElementById("second").style.backgroundColor = "#" + colorRGB[3].toString(16) + colorRGB[4].toString(16) + colorRGB[5].toString(16);
    document.getElementById("third").style.backgroundColor = "#" + colorRGB[6].toString(16) + colorRGB[7].toString(16) + colorRGB[8].toString(16);
}

setup();

first.onclick = function() {
    if (real == 0) alert("Correct");
    else alert("Why you so dumb?");
    setup();
}

second.onclick = function() {
    if (real == 1) alert("Correct");
    else alert("Why you so dumb?");
    setup();
}

third.onclick = function() {
    if (real == 2) alert("Correct");
    else alert("Why you so dumb?");
    setup();
}

change.onclick = function() {
    alert("Why you so dumb?");
    setup();
}