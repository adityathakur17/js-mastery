const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task is completed or whatever')
        resolve()
    },1000)
})

 promiseOne.then(function(){
    console.log('Promise consumed')
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Resolve called so async 2 resolved yo you hear me foo?')
})

promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Adi", email: "adi@leader.com"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user); 
})

promiseFour = new Promise(function(reject,resolve){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "jaddu", email: "jaddupaddu@kaddu.com"})
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
       
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E", error)
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))