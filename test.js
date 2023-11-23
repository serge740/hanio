var myBites=document.getElementById("bites");
var myLong=document.getElementById('long');
var myShort=document.getElementById('shot');

myBites.onclick=function(){
    myBites.classList.toggle("bit")
    myShort.classList.toggle('sho')
    myLong.classList.toggle('kog')
}