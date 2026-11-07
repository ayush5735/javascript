
// console.log("a")
// console.log("y")
// console.log("u")
// console.log("s")
// console.log("h")


function sayMyName(){
    console.log("a")
    console.log("y")
    console.log("u")
    console.log("s")
    console.log("h")
}

// sayMyName


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(3, 4)



function addTwoNumbers(number1, number2){
    // let result = number1 +number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 4)

// console.log("result: ", result)


function loginUserMessage(username){
    if(username === undefined){
        console.log("plese enter a user name")
        return
    }
    return `${username} justlogged in`           //STRING INTERPOLATION
}

// console.log(loginUserMessage("ayush"))


function calculateCartPrice(val1, val2, ...num1){          // intresting ...   val 1 val 2me pahili value assign ho jayegi
    return num1
}

// console.log(calculateCartPrice(2,4,5,6))




const user={
    username: "ayush",
    price: 99
}
function handleObject(anyobject){
    console.log(`user name is${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)


const myNewArray = [200, 4000, 4000, 5000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 4000, 4000, 5000]))