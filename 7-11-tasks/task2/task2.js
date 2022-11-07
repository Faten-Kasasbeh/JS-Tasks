function largest(x,y){
    var largeNum;
    document.write("the two numbers are: " +x+ " and "+ y);
    if (x>y){
        largeNum=x;}
    else if(y>x){
        largeNum=y;
    }
    else {
        largeNum="tow number is equal";
    }
return largeNum ;
}

document.write(" and The largest number is:"+largest(5,10));