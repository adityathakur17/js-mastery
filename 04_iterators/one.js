const arr = [21,33,232,223.44,434];
for(let num of arr){
    if(num%2==0){
        // console.log(num)
    }
}

const greetings = "Hello Everyone"

for(let greet of greetings){
    // console.log(greet)
}

const map = new Map ()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("AU", "Australia")
map.set("CA", "Canada")

// console.log(map)

for(const [key,value] of map){
    console.log(`Short of ${value} is ${key}`);
}