//conditinial
//== -> just value / === -> value && data type
//Number ka dakhale code zire estafade kardime tabdile string be number
//parseInt Tabdile mikhone string be Number
// است if  مهم ترین شرط 
//input -> leftnumber - operator - rightnumber

const leftNumber = +prompt("please Enter left number?");
const operator = prompt("please Enter operator?");
const rightNumber = +prompt("please Enter right number?");

if(isNaN(leftNumber) || isNaN(rightNumber)){
    console.log("leftNumber Error or rightNumber Error!")
}
if( operator === "+"){
    console.log( leftNumber + rightNumber)
}
if( operator === "-"){
    console.log( leftNumber - rightNumber)
}
if( operator === "*"){
    console.log( leftNumber * rightNumber)
}
if( operator === "/"){
    console.log( leftNumber / rightNumber)
}



//if( operator === "+"){
    //console.log(firstNumber + secodsNumber);
//}else if( operator === "-"){
    //console.log(firstNumber - secodsNumber);
//}else if ( operator === "*"){
    //console.log(firstNumber * secodsNumber);
//}else if( operator === "/"){
    //console.log(firstNumber / secodsNumber);
//}else{
    //console.log("operator is wrong!")
//}



//const firstNumber = +prompt("please Enter firstNumber?");
//const operator =  prompt("please Enter operator?");
//const secodsNumber = +prompt("please Enter secondeNumner?");

//if(isNaN(firstNumber + secodsNumber)){
 //   console.log("format is wronge")
  //} else {
  switch( operator ){
     case "+":
        console.log(firstNumber + secodsNumber);
       break;
    case "-":
        console.log(firstNumber - secodsNumber);
       break;
    case "*":
       console.log(firstNumber * secodsNumber);
        break;
   case "/":
       console.log(firstNumber / secodsNumber);
        break;
   default:
        console.log("operator is wrong!")
  }

  