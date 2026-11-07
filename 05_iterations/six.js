// const coding = ["js", "c++", "python", "java", "php"]

// const values = coding.forEach((item => {
//     console.log(item)
// }))
// console.log(values)



// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNUMS = myNums.filter(  (num) => num >4)
// console.log(newNUMS);



// const X = myNums.map((num)=> { return num+10})  // scope ka vishesh dhyan rakhhey


// const X = myNums
// .map((num) => {return num *10})
// .map((num) => num +1)
// .filter((num => num>+49))
// console.log(X);   // chaining



// reduce method 

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval;
}, 0)
console.log(myTotal)   // shopping cart me appan isko use krsaktey haii     // ,0 likhna hi padega taki isko pata cgaley kahan se chalu hoga