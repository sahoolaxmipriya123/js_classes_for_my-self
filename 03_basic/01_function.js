

// function myName (){
//     console.log("l")
//     console.log("a")
//     console.log("x")
//     console.log("m")
//     console.log("i")
// }

// myName()     //myName --reference  ,   ()--execution


// function addTwoNumber(num1 , num2){      //(num1 , num2)--parameters
//     console.log(num1+num2)
// }


function addTwoNumber(num1 , num2){      
//    let result = num1 + num2;
//    return result
      return num1+num2

}


 const result = addTwoNumber(4,5)               //(4,5)--arguments
    // console.log( "result :", result)


    function loggedIn(username = "sam"){
        if(username === undefined) {  //(!username)
           console.log("please enter a username")
           return
        }
        return `${username} just logged in`
    }
   //   console.log(loggedIn("laxmi"))


     
     function calculating (...num1){
          return num1 
     }
   //   console.log(calculating(200,300,400,560))


   //   how to pass object in function

   let user = {
      name : "laxmipriya",
      price : 199
   }


     function handleObject(anyobject){
      console.log(`the user name is ${anyobject.name} and he pay ${anyobject.price}`)
     }
   //   handleObject(user)

   handleObject({
      name : "priya",
      price : 456
   })

   //how to pass array in function

   let myNewArray = [456,458,789,852,]
    
   function handleArray (myArray){
         return (myArray[2])
   }

console.log(handleArray(myNewArray))
