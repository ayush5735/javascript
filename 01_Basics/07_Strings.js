const name = "ayush"

const repoCount = 50

console.log(name + repoCount);        // outdated

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('ayush')

console.log(gameName[0])

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('u'))
 
const newString = gameName.substring(0,4)        // positive index only

console.log(newString)

const anotherString = gameName.slice(0,4)        // we can give negative index as well

console.log(anotherString)


const anotherString1 = gameName.slice(-1,4)        

console.log(anotherString1)


const newStringOne = "    ayush      "

console.log(newStringOne)

console.log(newStringOne.trim())            // remoove unwanted space in string

const url = "http;//ayush.com/ayush%20singh"

console.log(url.replace('%20', '-'))        // replace the stringsss

console.log(gameName.split('_'))
 


