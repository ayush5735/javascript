

// const coding = ["js", "c++", "python"]

// coding.forEach( function (item){
//     console.log(item);
    
// }    )   // intresting

// coding.forEach( (item) => {
//     console.log(item);
    
// }  )



// // reference

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)




// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
    languageName : "javascript",
    languageFileName: "js"
    },
    {
    languageName : "java",
    languageFileName: "java"
    },
    {
    languageName : "python",
    languageFileName: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
})