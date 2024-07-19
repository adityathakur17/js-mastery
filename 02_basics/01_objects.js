const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.email = "email@gmail.com"
tinderUser.name = "Somename"


const regularUser = {
    id: "123abc",
    fullname:{
        userfullname:{
            firstname:"some",
            lastname:"name"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3  = {...obj1, ...obj2}
const obj4 = Object.assign(obj1,obj2)
// console.log(obj3)
// console.log(obj4)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("email"))

const course = {
    courseName : "Javascript",
    courseInstructor: "Aditya",
    coursePrice: 999
}

const {courseInstructor} = course

console.log(courseInstructor)
