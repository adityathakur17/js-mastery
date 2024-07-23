let myHeroes = ['Batman', 'Ironman'];


let heroPower = {
    Batman: 'Bat-signal',
    Ironman: 'Suit',

    getBatPower: function (){
        console.log(`Batman signam is ${this.Batman}`)
    }
}

Object.prototype.pillu = function (){
    console.log("pillu is omnipersent")
}

Array.prototype.pilluKiller = function (){
    console.log("I kill pillu for funsies")
}

heroPower.pillu();
myHeroes.pillu();
myHeroes.pilluKiller();
// heroPower.pilluKiller();

//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = 'I am back      '

String.prototype.trimLength = function (){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trimLength()    