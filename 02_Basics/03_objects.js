// singleton

// object literals

const mySym = Symbol("key1")

const JsUser ={
    "name": "ayush",
    age: 22,
    location: "jaipur",
    email: "ayush19390213@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["monday", "tuesday"],
    [mySym]: "key1"                           // interviews


}


// console.log(JsUser.email)         // oldmethod ya mostly used

// console.log(JsUser["email"])

// console.log(JsUser["name"])

// symbolmethod 
// console.log(JsUser[mySym])


// JsUser.email = "helloayush@gmailcom"

// Object.freeze(JsUser)
// JsUser.email = "hello@gmail.com"

// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



// mainly hum vale ko dot se access krenge nahi tou square bracket se krengey   
