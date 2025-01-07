// how to write array
// in squre bracket []

let arr = [0, 1, 2, 3, 4, ]


// array methods

// arr.push(5)  //add 5 in  last end.
// arr.push(5)
// arr.push(5)
// arr.push(5)
// arr.pop() //delete one element from last end.
// arr.unshift(9)
// arr.shift()  //no need to put any value.

// console.log(arr.includes(9))
// console.log(arr.indexOf(4))

let myArr = arr.join() //it convert array to string

// console.log(arr)
// console.log ( typeof myArr)

const myArr1 = arr.slice(1,3)  //it only display the array and does n't remove the portion.
// console.log(myArr1)
// console.log(arr)

const myArr2 = arr.splice(1,3)  //it remove the portion of array from the original array.
// console.log(myArr2)
// console.log(arr)



let days = ["monday","tuesday","wednesday"]
let months = ["january","february","march"]

// days.push(months)
// console.log(days)

//  let allElements = days.concat(months)
//  console.log(allElements)

//spread operator
let allNewElements = [...days , ...months]
console.log(allNewElements)

let anotherArray = [1,5,8,9,[4,5,8],66,88,77,[4,8,[7]]]
console.log(anotherArray.flat(Infinity))



console.log(Array.isArray("laxmi"))
console.log(Array.from("laxmi"))
console.log(Array.from({name : "laxmi"}))  //imp

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))