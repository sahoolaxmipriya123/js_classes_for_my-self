let name = "laxmipriya"
let age = 22
// console.log(name + " "+ age)
console.log(`my name is ${name} and my age is ${age}`)

// different way to declared string
let str = new String('laxmipriya')

// console.log(str.length)
// console.log(str.charAt(5))
// console.log(str.indexOf('m'))

let newString = str.substring(4,9)
// console.log(newString)
let newStringOne = str.slice(4,4)
// console.log(newStringOne)
let nameOne = "     sahoo"
let nameTwo = nameOne
console.log(nameTwo)
console.log(nameTwo.trim())

let url = "http://saxmipriya_shaoo_and.com"
console.log(url.replace(' ','-'))
console.log(url.includes('sahoo'))
console.log(url.split(5))
