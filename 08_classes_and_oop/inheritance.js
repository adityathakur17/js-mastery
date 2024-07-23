class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "@#23442")

chai.logMe()
chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User)

// behind the scene
function User(username){
    this.username = username
}

User.prototype.logMe = function (){

    console.log(`USERNAME IS ${this.username}`);
}

function Teacher (username, email, password){
    User.call(this, username)
    this.email = email
    this.password = password
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;


 const tea = new Teacher("tea", "tea@teacher.com", "@#269696")

 tea.logMe()