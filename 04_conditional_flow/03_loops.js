// for loop

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element)
    
// }

for (let i = 0; i <= 10; i++) {
    // console.log(`this is first value ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`this is second value ${j} and first value ${i}`)
        // console.log(i + "*" + j + "=" + i*j)
    }
    // console.log(j)
}

let myArray = ["rose","lily","daliha"]
for (let index = 0; index < myArray.length; index++) {
    const element =myArray[index];
    // console.log(element)
    
}
//break and contiune

// for (let index = 1; index <= 20; index++) {

//     if(index == 5){
//         console.log("5 is detected")
//         break;
//     }
//     console.log(index)
    
// }
for (let index = 1; index <= 20; index++) {

    if(index == 5){
        // console.log("5 is detected")
      continue
    }
    // console.log(index)
    
}




// while loop

index = 0
while (index <=10) {
    // console.log(`print ${index}`)
    index++
}

// do while loop
 let score = 11
do {
//    console.log( `my score is ${score}`) 
   score ++
} while (score <=10);

// for of loop

