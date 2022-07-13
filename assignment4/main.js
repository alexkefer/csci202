$(document).ready(function() {
    document.getElementById('totalNav').style.visibility = "hidden";
    var today = new Date();
    var hour = today.getHours();
    //Night
    if ((hour < 7) || (hour > 20)) {
        $("body").css("background-color", "#363533");
        $("body").css("color", "#c4c4c4");
    }
    //Afternoon
    if ((hour < 16) && (hour > 12)) {
        $("body").css("background-color", "#e3e3e3");
        $("body").css("color", "#171717");
    }
    //Evening
    if ((hour < 20) && (hour > 16)) {
        $("body").css("background-color", "#6f8096");
        $("body").css("color", "#242424");
    }
    //Morning
    if ((hour < 12) && (hour > 7)) {
        $("body").css("background-color", "rgba(210, 220, 146, 0.444)");
        $("body").css("color", "#242424");
    }
});

function MorningSet() {
    $("body").css("background-color", "rgba(210, 220, 146, 0.444)");
    $("body").css("color", "#242424");
    document.getElementById('totalNav').style.visibility = "hidden";
}

function NightSet() {
    $("body").css("background-color", "#363533");
    $("body").css("color", "#c4c4c4");
    document.getElementById('totalNav').style.visibility = "hidden";
}

function AfternoonSet() {
    $("body").css("background-color", "#e3e3e3");
    $("body").css("color", "#171717");
    document.getElementById('totalNav').style.visibility = "hidden";
}

function EveningSet() {
    $("body").css("background-color", "#7c8da3");
    $("body").css("color", "#242424");
    document.getElementById('totalNav').style.visibility = "hidden";
}

function LiveSet() {
    location.reload();
}

function navTrigger() {
    var nav = document.getElementById('totalNav');
    if (nav.style.visibility == "visible") {
        nav.style.visibility = "hidden";
    }   
    else if (nav.style.visibility == "hidden") {
        nav.style.visibility = "visible";
    }
}