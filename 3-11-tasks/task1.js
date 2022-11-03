var x=90;
if(x>=0 & x<50){
    document.write("FAIL");
}
else if (x>=50 & x<60){
    document.write("D");
}
else if (x>=60 & x<70){
    document.write("C");
}
else if (x>=70 & x<80){
    document.write("B");
}
else if (x>=80 & x<90){
    document.write("A");
}
else if (x>=90 & x<=100){
    document.write("A+");
}
else {
    document.write("Invalid mark");
}
