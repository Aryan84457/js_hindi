const tinderUser = new Object();
const sym = Symbol("key1")
const jsUser = {
    name: "Aryan",
   [sym]: "mykey1",
    email: "toshh@gmail.com",
    "roll number": "arya 123",
    lastLogin: ["M","W"]
}
//console.log(Object.entries(jsUser));
// console.log(jsUser);
// console.log(jsUser["roll number"]);
// console.log(typeof jsUser["sym"]);
jsUser.greeting = function(){
    console.log("HELLO BIROO");
}
jsUser.greeting2= function(){
    console.log(`HELLO BIROO ${this.name} Your Email id is : ${this.email}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());



tinderUser.id = "rahul@gmail.com";
tinderUser.name = "Rahul";
tinderUser.islooggedIn = false;
// console.log(tinderUser);

const regularUser = {
    userName :{
        fullName:{
            firstName : "Aryan ",
            lastName : "Agarwal"
        }
    }
}
// console.log(regularUser.userName.fullName.lastName);

const obj1 = { 1:"A",2:"B"};
const obj2 = { 3:"C",4:"D"};
const obj4 = { 3:"C",4:"D"};
 const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
// const obj5 = {...obj1,...obj2,...obj4};
// console.log(obj5==obj3);


const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Aryan"
}


const {courseInstructor : arya} = course

//console.log(arya);