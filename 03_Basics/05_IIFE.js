// immediately invoked function expression 

(function chai(){
    console.log(`DB CONNECTED `)

})();         // paranthesis play a vital role in order to protect from global scope pollution 

// semicolon used to end one code




((name) => {
    console.log(`DB CONNECTED to you ${name} `)
})(`ayush`)