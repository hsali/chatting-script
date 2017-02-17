"use strict";

function clickchat() {
    console.log("click button");
    if ($("#mmc-onoffbutton").css("background-image").toString().includes("chat.svg")) {

        document.getElementById("mmc-onoffbutton").style.backgroundImage = "url('http://hsali.github.io/chatting-script/output/images/close.svg')";
        $(".mmc-wrapper").css("display", "block");
    } else {
        document.getElementById("mmc-onoffbutton").style.backgroundImage = "url('http://hsali.github.io/chatting-script/output/images/chat.svg')";
        $(".mmc-wrapper").css("display", "none");
    }
}