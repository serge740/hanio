var btn = document.getElementById("btn");

var input=document.getElementById("input");
var boX = document.getElementById("boc");
var mysaS=document.getElementById("saaz")
var bodY=document.querySelector("body")
var hea = document.querySelector(".hea");
var navbar =document.querySelector(".navbar")
var myBites=document.getElementById("bites");
var myLong=document.getElementById('long');
var myShort=document.getElementById('shot');

myBites.onclick=function(){
    myBites.classList.toggle("bit")
    myShort.classList.toggle('shx')
    myLong.classList.toggle('kog')
    bodY.classList.toggle("hide")
     navbar.classList.toggle("shits")
}



boX.onclick=function(){
    input.style.width="190px"
    boX.style.zIndex=-1
    input.style.border="1px solid black"
    input.style.padding=" 0px 0px 0px 10px"
    mysaS.style.left="67%"


}
mysaS.onclick=function(){
    input.style.width="0px"
    input.style.padding=" 0px 0px 0px 0px"
    input.style.border="0px solid black"
    mysaS.style.left="47%";
    boX.style.zIndex=1
}   
btn.onclick = function(){
    btn.style.cursor="progress"
    
}