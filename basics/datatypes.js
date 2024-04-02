//primitive
// 7 types : string ,number ,Boolean , null, symbol,undefined,BigInt

//javascript is an dynamic type language


//Reference type(Non primitive)
//array,objects ,functions
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const heros = ["shaktiman","naagraj","doga"];
let myObj ={
    name: "aryan",
    age : 21,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
  