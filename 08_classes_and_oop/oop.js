const user ={
    username:"hitandsun",
    loginCount: "true",
    isLockedin: "true",

    getUserDetails: function(){
        // console.log("Got user details frm the user ")
        // console.log(`name of the user is ${this.username}`)
        // console.log(this)
        // console.log(user)
    }
}

// user.getUserDetails()
// console.log(this)

function User(username, loginCount, isLockedin){
    this.username = username;
    this.isLockedin = isLockedin;
    this.loginCount = loginCount;

    this.greeting = function(){
        console.log(`Welcome this user ${this.username}`)
    }

    return this;

}

const userOne = new User("Adi", true, 8)
const userTwo = new User("Piddu", false, 69)

console.log(User.prototype)

