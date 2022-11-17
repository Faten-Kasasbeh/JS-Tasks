// https://www.breakingbadapi.com/api/characters

async function getdata(){
var charast = await fetch ("https://www.breakingbadapi.com/api/characters");
console.log(charast);
var data = await charast.json();
console.log(data);
    const select = document.getElementById('names');
    for(let i=0; i<data.length; i++){
        document.getElementById('names').innerHTML += `<option value = ${data[i].img} >${data[i].name}</option>`
    
     }
}


getdata();
function change(){
    document.getElementById("image").src= document.getElementById("names").value;
}