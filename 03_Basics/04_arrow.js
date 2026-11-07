
const user={
    username: "ayush",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`)         // current context ko refer krne ke liye hum this lagayengey
        // console.log(this)
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()     // sam isliye hoo paya kyunki hum yaha  this. ka usee kiya tha jo current value ko assign karta hai

// console.log(this)


// function chai(){
//     let username = "ayush"
//     console.log(this.username)         // undefined
// }
// chai()


// const chai = function chai(){
//     let username = "ayush"
//     console.log(this.username)         // undefined
// }
// chai()


// now we use arrow function to currect the information

// const chai = () => {
//     let username = "ayush"
//     console.log(this.username)          // undefined
// }
// chai()


// isme hum ye nhi bol satey ki object aur arrow function me ye difference hai ki hum usmey this use karsaktey hai object me nahi tou ye galat hai
// interviwer ye nahi janna chahta aap se

//arrow function

// const addTwo = (num1, num2) =>{
//     return num1 +num2                     //explicit return
// }

// console.log(addTwo(4, 5))

// const addTwo = (num1, num2) =>  num1 +num2          // impicit return

// console.log(addTwo(4, 5))      


const addTwo = (num1, num2) => ({username: "ayush"})

console.log(addTwo())

