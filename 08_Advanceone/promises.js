// // create
// const promiseOne = new Promise(function(resolve, reject) { 
//     // Do an async tast
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('async task is complete')
//         resolve()
//     }, 1000)

// })

// // consume
// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"chai", email:"hello@example.com"})

//     }, 1000)
// })
// promiseThree.then(function(user){
//        console.log(user);
       

// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"ayush", password: 12345})
//         }
//         else{
//             reject('error: something went wrong')
//         }
//     },1000)
// })

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
       
// })
// .then((username) => {
//     console.log(username);
    
// })
// .catch(function(error){
//     console.log(error);
    
// }).finally(() => console.log("the promise either is resolved aur rejected")
// )


// const promiseFive = new Promise(function(resolve, reject){                  // promise os object
//         setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"ayush", password: 12345})
//         }
//         else{
//             reject('error: something went wrong')
//         }
//     },1000)
// })

// async function consumepromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

// consumepromiseFive()










// async function getAllUser(){
//     const response = await fetch('https://github.com/hiteshchoudhary/js-hindi-youtube/blob/main/09_advance_one/promises.js')
//     const data = response.json()
//     console.log(data)
// }

// getAllUsers()




fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))