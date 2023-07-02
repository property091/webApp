foot = document.getElementsByTagName("footer");




function hide(x) {


    if(x == 1) {
        document.getElementById("tarifs").style.opacity = "0%";
        document.getElementById("tarifs").style.visibility = "hidden";
        document.getElementById("tarifs").style.zIndex = "-1";

        document.getElementById("add").style.opacity = "0%";
        document.getElementById("add").style.visibility = "hidden";
        document.getElementById("add").style.zIndex = "-1";

        document.getElementById("home").style.opacity = "100%";
        document.getElementById("home").style.visibility = "visible";
        document.getElementById("home").style.zIndex = "2";
    }

    if (x == 2) {
        document.getElementById("tarifs").style.opacity = "100%";
        document.getElementById("tarifs").style.visibility = "visible";
        document.getElementById("tarifs").style.zIndex = "2";

        document.getElementById("add").style.opacity = "0%";
        document.getElementById("add").style.visibility = "hidden";
        document.getElementById("add").style.zIndex = "-1";

        document.getElementById("home").style.opacity = "0%";
        document.getElementById("home").style.visibility = "hidden";
        document.getElementById("home").style.zIndex = "-1";
    }
    
    if (x == 3) {
        document.getElementById("tarifs").style.opacity = "0%";
        document.getElementById("tarifs").style.visibility = "hidden";
        document.getElementById("tarifs").style.zIndex = "-1";

        document.getElementById("add").style.opacity = "100%";
        document.getElementById("add").style.visibility = "visible";
        document.getElementById("add").style.zIndex = "2";

        document.getElementById("home").style.opacity = "0%";
        document.getElementById("home").style.visibility = "hidden";
        document.getElementById("home").style.zIndex = "-1";

    }
}





list = document.getElementById('list');

for(var i = 0; i < 7; i++) {
    list.innerHTML += "<div class='addImg' id=addImg" + i + ">"
    
    + "<label class='price'>" + rnd(1000) + "₽</div>";

}

for(var i = 0; i < 7; i++) {
    list.innerHTML += "<div class='addImg' id=addImg" + i + ">"
    
    + "<label class='price'>" + rnd(1000) + "₽</div>";

}
for(var i = 0; i < 7; i++) {
    list.innerHTML += "<div class='addImg' id=addImg" + i + ">"
    
    + "<label class='price'>" + rnd(1000) + "₽</div>";

}


function rnd(x) {
    return Math.floor(Math.random() * x);
}





let detect = new MobileDetect(window.navigator.userAgent)
if(detect.mobile() || detect.phone() || detect.tablet() || detect.os()) {
    console.log('mobile')
}
else {
    document.body.innerHTML = "this site only for mobile version";
    console.log("this site only for mobile version");
}
