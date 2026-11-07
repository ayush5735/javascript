

// for of
const arr =[1,2,3,4,5]

for (const num of arr) {
    //console.log(num)
    
}

const greetings = "hello sachi"

for (const greet of greetings) {
    //console.log(greet)
    
}



// maps
const map = new Map()

map.set('IN', "India")
map.set('UK', "united kingdom")
map.set('fr', "france")
map.set('IN', "India")

//console.log(map)    // it gives the unique key value pairs


for (const [key, value] of map) {
    //console.log(key, ":-" , value)
    
}

// it not works on the objects



// for in

const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb:'rubby'
}

for (const key in myObject) {
    //console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js", "ruby", "c"]
for (const key in programming) {
    //console.log(programming[key])

}