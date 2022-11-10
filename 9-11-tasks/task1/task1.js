let var1=document.getElementById("info1");
let var2=document.getElementById("info2");
let var3=document.getElementById("info3");
let var4=document.getElementById("info4");
let var5=document.getElementById("info5");
let var6=document.getElementById("female");
let var7=document.getElementById("male");
let var8=document.getElementById("html");
let var9=document.getElementById("css");
let var10=document.getElementById("js");
let var11=" ";

function submet(){
localStorage.setItem("name",var1.value);
localStorage.setItem("age",var2.value);
localStorage.setItem("about",var3.value);
localStorage.setItem("uni",var4.value);
localStorage.setItem("major",var5.value);
if(var6.checked){
    localStorage.setItem("gender","female");
}
else if(var7.checked){
    localStorage.setItem("gender","male");
}
if(var8.checked){
    var11 +="html  ";
}
    if(var9.checked){
    var11 +=" CSS";
 }
       if(var10.checked){
       var11 +="JS";
 }
 localStorage.setItem("langueges", var11);

document.getElementById("card1").innerHTML+=localStorage.getItem("name");
document.getElementById("card2").innerHTML+=localStorage.getItem("age");
document.getElementById("card3").innerHTML+=localStorage.getItem("about");
document.getElementById("card4").innerHTML+=localStorage.getItem("uni");
document.getElementById("card5").innerHTML+=localStorage.getItem("major");
document.getElementById("card6").innerHTML+=localStorage.getItem("gender");
document.getElementById("card7").innerHTML+=localStorage.getItem("langueges");


   document.getElementById("card").style.display="block";
}
