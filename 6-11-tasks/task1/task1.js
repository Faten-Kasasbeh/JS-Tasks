let x = Number(prompt("ENTER YOUR birthday month"));

switch(x){
    case 1:
       document.write ("January");
        break;
      case 2:
        document.write ("February");
        break;
      case 3:
        document.write("March");
        break;
      case 4:
        document.write("April");
        break;
      case 5:
        document.write ("May");
        break;
      case 6:
        document.write ("June");
        break;
      case  7:
        document.write ("July");
        break;     
        case  8:
    document.write ("August");
    break;  
    case  9:
        document.write ("September	");
        break;    
     case  10:
            document.write ("October");
            break;   
    case  11:
        document.write ("November");
        break;  
        case  12:
        document.write ("December");
        break;  
    default:  document.write ("This is not month");                     
}
document.write( "<br>");
let i=0;
do{
    document.write(i + "<br>");
    i++;
}
while (i<5);
document.write( "<br>");

let w = Number(prompt("ENTER month"));
while(w<10){
    document.write(w + "<br>");
    w++;
}