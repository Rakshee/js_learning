// function sayMyName(){
//     console.log("A");
//     console.log("s");
//     console.log("i");
//     console.log("t");

// }
// sayMyName()


// function addTwoNumbers(num1,num2){
//     console.log("AAnnn : "+num1+num2);
// }


// function addTwoNumbers(num1,num2){
//     // let result = num1+num2
//     // return result
//     // console.log("first") //not executed
//    return num1+num2
// }

// const result=addTwoNumbers(3,"a") 
// console.log("Result: ",result);



// function loginUserMsg(username){
// if(username=== undefined){
//     console.log("Please enter a name ")
//     return
// }

//     return `Welcome back ${username}`
// }

// //console.log(loginUserMsg(" Asit"))
// console.log(loginUserMsg())



const user={
    username:"Asit",
    price:200
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user)
handleObject({
    username:"Asit mishra",
    price:2006
})

const myNewArray = [1,2,3,4,5]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40]))