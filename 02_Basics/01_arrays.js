// array

const myArray = [0, 1, 2, 4, 7,]   // arrays are recyclable
// console.log(myArray[3])

// myArray.push(6)
// myArray.pop()

// myArray.unshift(9)

// console.log(myArray.includes(9))

const newArr = myArray.join()
// console.log(myArray)
// console.log(newArr)


// slice splice    // splice actually manupulate the array

console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1)

console.log("B", myArray)

const myn2 = myArray.splice(1,3)

console.log(myn2)

console.log("c", myArray)

