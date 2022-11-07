function shortest (array){
    let short=array[0];
    for (let i=0; i<array.length-1; i++){
        if(array[i].length<short.length){
            short=array[i]; }
    }
    return short;}
    let a=["Ali", "khaled", "mohammed"];
    document.write(shortest (a));