
//object literals
const mySym = Symbol("key1")
const JsUser= {
    name: "Kunu",
    "full name": "Kunu Tripathy",
    [mySym]: "key178", ///symbol as key
    age: 28,
    email: "kunu@example.com",
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser["email"])
// console.log( JsUser[mySym])
// Object.freeze(JsUser);
JsUser.email="kunu@newemail.com"
// console.log(JsUser["email"])



// console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello miss "+this.name);
}

JsUser.greeting1=function(){
    console.log(`Hello  ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting1());