
// singleton

const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name ="ayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "ayush19390213@gmail.com",
    fullname: {
        userfullname:{
            firstname:"ayush",
            lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname)

// const obj1= {1: "a", 2:"b"}
// const obj2= {3: "a", 4:"b"}

// // comst obj3 = {obj1, obj2}

// // const obj3 = Object.assign(obj1, obj2)
// // const obj3 = Object.assign({}, obj1, obj2)       // {} it is used for the target
// const obj3 = {...obj1, ...obj2}

// console.log(obj3)


console.log(tinderUser)

console.log(Object.keys(tinderUser))          // important
console.log(Object.values(tinderUser))          // important

console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))