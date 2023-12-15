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
var mide=document.querySelector(".mide")
var li1=document.querySelector(".lia1");
var man1=document.querySelector(".man1");

var li2=document.querySelector(".li2");
var man2=document.querySelector(".man2");

var li3=document.querySelector(".li3");
var man3=document.querySelector(".man3");


var rote1=document.querySelector(".rote1")
var rote2=document.querySelector(".rote2")
var rote3=document.querySelector(".rote3")
var rote4=document.querySelector(".rote4")
var rote5=document.querySelector(".rote5")
var rote6=document.querySelector(".rote6")

man1.onclick=function(){
    
    li1.classList.toggle("nigga")
    man1.classList.toggle("ch-man")
    rote1.classList.toggle("ch-rote")
    navbar.classList.toggle ("shits")
    navbar.classList.add("increase")
   
}
man2.onclick=function(){
    li2.classList.toggle("nigga")
    man2.classList.toggle("ch-man")
    rote2.classList.toggle("ch-rote")
  
}

man3.onclick=function(){
    li3.classList.toggle("nigga")
    man3.classList.toggle("ch-man")
    rote3.classList.toggle("ch-rote")
    
}

var li4=document.querySelector(".li4");
var man4=document.querySelector(".man4");

var li5=document.querySelector(".li5");
var man5=document.querySelector(".man5");

var li6=document.querySelector(".li6");
var man6=document.querySelector(".man6");

man4.onclick=function(){
    li4.classList.toggle("nigga")
    man4.classList.toggle("ch-man")
    rote4.classList.toggle("ch-rote")


}
man5.onclick=function(){
    li5.classList.toggle("nigga")
    man5.classList.toggle("ch-man")
    rote5.classList.toggle("ch-rote")

}

man6.onclick=function(){
    li6.classList.toggle("nigga")
    man6.classList.toggle("ch-man")
    rote6.classList.toggle("ch-rote")

}

function About(){
    myBites.classList.toggle("bit")
    myShort.classList.toggle('shx')
    myLong.classList.toggle('kog')
    mide.classList.toggle("shide")
     
     navbar.classList.remove("increase")
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
// document.body.addEventListener("keyup",function(ev){
//     if(ev.key=="w"){
//         About()
//     }
// })