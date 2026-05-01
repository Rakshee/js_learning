//const tinderUser=new Object()
const tinderUser={}
 tinderUser.id="123abc"
 tinderUser.name="Kunu"
    tinderUser.isLoggedIn=false
    tinderUser.lastLoggedInDays=["Monday","Friday"]
// console.log(tinderUser);

const regularUser={
    email:"acjk@jhgjf.com",
    fullName:{
    userFullName:{
        fName:"Kunu",
        lName:"Tripathy"
    }
} 
}

console.log(regularUser.fullName?.userFullName.fName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2);
//console.log(obj3);




const user=[
    {
        id:1,
        name:"Kunu",
    },
    {
        id:2,
        name:"John",        
    },
            {
        id:3,
        name:"Jane",
            }
]

//console.log(Object.keys(tinderUser))

//de structureing
const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor:"Kunu zz"
}

const {courseInstructor: instructor}=course
console.log(instructor);


