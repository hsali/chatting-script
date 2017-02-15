function clickchat() {
    console.log("click button")
    if ($("#mmc-onoffbutton").css("background-image").toString().includes("chat.svg")) {

        document.getElementById("mmc-onoffbutton").style.backgroundImage = "url('images/close.svg')";
        $(".mmc-wrapper").css("display", "block");
    }
    else {
        document.getElementById("mmc-onoffbutton").style.backgroundImage = "url('images/chat.svg')";
        $(".mmc-wrapper").css("display", "none");
    }
}
