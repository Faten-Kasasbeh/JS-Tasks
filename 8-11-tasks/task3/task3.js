function fontty() {
        if( document.getElementById("font").value =="arial"){
        document.getElementById("text").style.fontFamily="Arial, Helvetica, sans-serif";
}
else if( document.getElementById("font").value =="Times"){
        document.getElementById("text").style.fontFamily="'Times New Roman', Times, serif";
}
else if( document.getElementById("font").value =="Lucida"){
            document.getElementById("text").style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    }
}

function sizeFont() {
    if( document.getElementById("size").value =="small"){
    document.getElementById("text").style.fontSize="12px";
}
else if( document.getElementById("size").value =="medeum"){
    document.getElementById("text").style.fontSize="20px";
}
else if( document.getElementById("size").value =="big"){
        document.getElementById("text").style.fontSize="25px";
}
}

function icheck(){
    if(document.getElementById("icheck").checked){
    document.getElementById("text").style.fontStyle="italic";}
    else 
    {document.getElementById("text").style.fontStyle="normal";}
}
function bcheck(){
  if( document.getElementById("bcheck").checked){
    document.getElementById("text").style.fontWeight="bold";}
    else{
    document.getElementById("text").style.fontWeight="normal";}
}
function uncheck(){
  if(document.getElementById("uncheck").checked)
    {document.getElementById("text").style.textDecoration="underline";}
    else {
    document.getElementById("text").style.textDecoration="none";}
}