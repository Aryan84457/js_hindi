
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
  //  userName : "Aryan",
    price : 100
}

function handleObject(anyobject){
     console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`);
}
//handleObject(user);

const myArray = [200,300,400]
function returnSecondValue(getArray){
    return getArray[1];
}//console.log(returnSecondValue(myArray));


 

if(true){
    let a = 10
    const b = 20
    var c = 30
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
   // const username = "Aryan"

    function two(){
        const website = "VS code"
        console.log(username);
    }
   two()   
}
  
const userA = {
   // username : "Aryan",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to Website`);
        console.log(this);

    }
};

// userA.welcomeMessage();
// userA.username = "agarwal"
// userA.welcomeMessage();
 
//function chai(){
    // console.log(this);
//}

//chai()

// const chae = function(){
//     let useRname = "Aryan"
//     console.log(this);
// }
// chae();

// const chai = () => {
//     let useRname = "Aryan"
//     console.log(this);
// }

// chai()

// const add2 = (num1,num2)  =>{
//     return num1 +num2
// }

// const add2 = (num1,num2)  => num1 +num2

// console.log(add2(3,4))


//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// ((name) => {
//     console.log(`DB CONNECTED TWO BY ${name}`);
// })('ARYAN')





















