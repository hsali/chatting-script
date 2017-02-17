
(function () {
   //$("body").append($.load("./output/index.html"));
    //document.write($.load("./output/index.html"));
        var xmlhttp;
        if (window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();
        }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
               $('body').append(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET","index.html",true);
        xmlhttp.send();

}());