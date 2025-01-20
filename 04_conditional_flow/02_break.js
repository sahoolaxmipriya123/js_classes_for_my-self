let score = 550
  

// if (score < 500) {
//     console.log("score is less than 500")
    
// }else if(score <700){
//     console.log("score is less than 700")
// }else if (score < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }



// const userloggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if (userloggedIn && debitCard && 2==3) {
//     console.log("allow to shop")
    
// }
// if (loggedInFromGoogle || loggedInFromEmail ||true) {
//     console.log("user is logged in")
    
// }



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


let month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;

    default:
        console.log("defult case")
        break;
}


// Nullish Coalescing operator (??):null undefind
  let val1 ;
//   val1 = 5 ?? 10
//   val1 = undefined ?? 10

  val1 = null ?? 10 ?? 20

  console.log(val1)

//   terniary operator 
const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")