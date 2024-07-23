function multiplyBy5(num){
    return (num*5)
}

multiplyBy5.power = 2;
multiplyBy5.prototype.description = "This function multiplies by 5"

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype.description);

function createUser (username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 234)

chai.printMe();
