snowStorm.snowColor = '#fff';

var theme = document.getElementById("theme");
var themebg = document.getElementById("themebg");

theme.onclick = function(){
    if(themebg.classList.contains("white")){
        themebg.classList.replace("white" , "red")
    }
    else{
        themebg.classList.replace("red","white")
    }
}