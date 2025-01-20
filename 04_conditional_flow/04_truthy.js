const usereEmail = []
  if (usereEmail) {
    console.log("we got your email")
    
  }
  else{
    console.log("did't get email")
  }

//   falsy value
// false , 0 ,-0 ,Bigint 0n ,"" , null , undefind ,NaN

// truthy value
// "0" , 'false' ," " , [] ,{} , function(){}


if (usereEmail.length ===0) {
    console.log("array is empty")
}
let empObj = {}


if(Object.keys(empObj).length===0){
    console.log("empty object")
}
// false == 0  o/p-true
// false ==''   o/p-true
// 0==''   o/p-true


