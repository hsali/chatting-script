/**
 * Created by DELL on 13/02/2017.
 */

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
                document.write(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET","https://hsali.github.io/chatting-script/output/index.html",true);
        xmlhttp.send();

}());