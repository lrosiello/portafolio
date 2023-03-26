
document.addEventListener("DOMContentLoaded", init());

function init(){
    for (const element of document.getElementsByClassName("classname")){
        console.log(element);
     }
}