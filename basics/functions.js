
// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1 , number2){
    let result = number1+number2;
    return result;
}

addTwoNumbers(3,4);
function userName(name="agarwal"){
    return`${name} just logged in`
}
let player = userName("");
// console.log(player);


function calculateCarePrice(...num1){
    return num1;
}
// console.log(calculateCarePrice(200,300,400));


const user = {
    userName : "Aryan",
    price : 100
}

function handleObject(anyobject){
     console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`);
}
//handleObject(user);

const myArray = [200,300,400]
function returnSecondValue(getArray){
    return getArray[1];
}
  console.log(returnSecondValue(myArray));


