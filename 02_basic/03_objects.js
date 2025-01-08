//there are 2 types of we can decleard object

//constructor (object.create) = singleton

//object literals = not singleton

let mySym = Symbol("key1")

const user = {
    name : "laxmipriya",
    "full name":"laxmipriya sahoo",
    [mySym] : "myKey1",
    age : 22,
    email :"laxmipriya@gmail.com",
    islogged : false,
    daysInlogged : ["sunday","monday"]

}
// console.log(user.name)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user)
// console.log( typeof user[mySym])



user.email = "sahoo@gmail.com"
// Object.freeze.user
user.email = "laxmi@gmail.com"
// console.log(user)

user.greeting = function(){
    console.log("hello user")
}
user.greetingTwo = function(){
    console.log(`hello user, ${this.name}`)
}
// console.log(user.greeting())
// console.log(user.greetingTwo())




let tinder = {}

tinder.email = "sahoo@gmail.com"
tinder.id = "123abc"
tinder.islogged = false
// console.log(tinder)

let anotherUser = {
    email : "laxmi@gmail.com",
    Name : {
          username : {
             firstName : "laxmipriya",
             lastName : "sahoo"
          }  
    },
    islogged : true,
    state : "odisha"
}

// console.log(anotherUser.Name.username.firstName)

let obj1 = {1:"a",2:"b",3:"c"}
let obj2 = {4:"a",5:"b",6:"c"}
let obj3 = {7:"a",8:"b",9:"c"}

// let obj4 = {obj1,obj2,obj3}
// let obj4 = Object.assign({},obj1,obj2,obj3)
let obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)



let user1 = [
    {
        id:1,
        email:"sahoo@gmail.com"
    }
    ,  {
        id:1,
        email:"sahoo@gmail.com"
    },  {
        id:1,
        email:"sahoo@gmail.com"
    },  {
        id:1,
        email:"sahoo@gmail.com"
    }
]
// console.log(user1[1].email)

// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))
// console.log(tinder.hasOwnProperty('isloggedin'))



let course = {
 "course name":"my self learning",
 price :999,
 instractorName :"Hitesh"

}
// console.log(course.instractorName)
let {instractorName :instructor} = course
// console.log(instractorName)

console.log(instructor)










