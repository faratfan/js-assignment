console.log("Working on FirstProject");
const time= 12;
const time2= "1pm";
const time3="4pm";


//if statement
if(time < 12){
   console.log("Good Morring")
}else if(time => 12){
  console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}
// switch/case
switch(time2){
    case "1pm":
        console.log("Good Afternoon");
        break;
    case "4pm":
        console.log("Good Evening");
        break;
    default:
        console.log("Good Night");
        break;
}