function Password1() { 
let pw1= document.getElementById('pass1');
   if(pw1.value.length <6) {  
       document.getElementById('comment1').innerHTML = 'Password length must be atleast 6 characters';  
       document.getElementById('butt').style.display ='none';
       document.getElementById('comment2').innerHTML = "";
    }  
    else{
     document.getElementById("comment1").innerHTML = '';   
    }
}
function password2() {
    let pw= document.getElementById('pass1');
    let pw2= document.getElementById('pass2');

    if (pw.value != pw2.value) {
      document.getElementById('comment2').innerHTML = "The tow passwords don't match";
      document.getElementById('butt').style.display ='none';
    } 
    else {
        document.getElementById('comment2').innerHTML = "";
      document.getElementById('butt').style.display ='inline-block';
    }
  }