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
//Expected Answer:Good Afternoon
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
//Expected Answer:GoodAfternoon

//Understanding AND/OR/Not -->Logical Operator
//"&&","||","!"
//case: check age  and  grade == A ,issue Scholorship
const age="18";
const  grade="A";


if (age >= 18 && grade >="A"){
    console.log("Congratulation, you have qualify for scholarship");
}else{
   console.log("It's alright, You can try next year");
}
//checking for OR ,|| scenario

if(age <= 17 ||  grade >= "A"){
    console.log("Congratulation, you have qualify for scholarship");
}else{
    console.log("It's alright, You can try next year");
}
//checking for !,not scenario
if(!age >= 18 && grade >="A"){
    console.log("Congratulation, you have qualify for scholarship")
}else{
    console.log("It's alright, You can try next year");
}
//Brain Storming Ternary operator
var passport="valid";
//var visa="issue";

var visa = passport == "valid" ? "issue visa" : "Renew your passport" ;
console.log(visa)