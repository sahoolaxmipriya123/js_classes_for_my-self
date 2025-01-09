  let obj = {
    name : "laxmipriya",
    price :999,
    mssage : function (){
            //  console.log(`${this.name} ,welcom to our website`)
            //  console.log(this)
    }
  }
//   obj.mssage()
//   obj.name = "priya"
  obj.mssage()
// console.log(this)



// function me(){
//     const username = "gayatri"
//     console.log(this.username)
// }
// me()


const arrow = () =>{
    const username = "gayatri"
    console.log(this)
}
arrow()

// arrow function


// let addTwoNum = (num1,num2) =>{
//       return num1+num2
// }
// let addTwoNum = (num1,num2) => num1 + num2
// let addTwoNum = (num1,num2) => (num1 + num2)

let addTwoNum = (num1,num2) => ({username : "laxmi"})      //return object

console.log(addTwoNum(4,5))





