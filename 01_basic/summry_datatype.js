// primitive

// 7 type of data type : string , number,Boolean,null,undefind,symbol,Bigint
  


// reference (Non primitive)

// Array, object,functions

let flowers = ["rose","lily","dalia"]     //array

let obj = {
    name :"laxmipriya",   //object
    age : 22,
}

let myFunction  = function(){    //function
    console.log("Hello World")
}


// stack(primitive)  Heap(Non-primitive)


let myName = "laxmipriya"

let myFriendName =myName
myFriendName = "gayatri"
console.log(myName)
console.log(myFriendName)

let userOne = {
    email:"laxmi@gmail.com",
    password:"laxmi"

}
let userTwo =userOne
console.log(userTwo)

userTwo.email = "priya@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)

