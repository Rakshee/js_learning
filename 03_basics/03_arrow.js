// const user={
//     username:"Asit",
//     price:200,
//     welcomeMsg:function(){
//         console.log(`Welcome back ${this.username}`)
//         // console.log(this)
//     }
// }

// // user.welcomeMsg();
// // user.username="Asit Mishra"
// // user.welcomeMsg();

//  console.log(this)

// function chai(){
//     // console.log(this)
//     // let username="Asit"
//     // console.log(this.username);
// }

// const chai = ()=>{

//     let username="Asit"
//     console.log(this);
// }


// chai()




const addTwo =(num1,num2)=>{
    return num1+num2
}

//const addTwoo=(num1,num2)=>(num1+num2)

const addTwo = (num1,num2) => ({
    userName:"Asit",
})
console.log(addTwo(3,4))