//QUESTION -> CREATE A FUNCTION multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyByTwo(nums) {
  for (i in nums) {
    if (typeof nums[i] === "number") {
      nums[i] *= 2;
    }
  }
}
multiplyByTwo(nums);
console.log(nums);

//-----------------------------------------------

let user = {
  name: "Aditya Thakur",
  age: 21,
};

const strObj = JSON.stringify(user);

// console.log(JSON.parse(strObj))

const settings = {
  username: "Aditu",
  level: 34,
  health: 345,
};

const data = JSON.stringify(settings, ["level", "health"]);

console.log(data);

const shape = {
  rad: 10,
  diameter() {
    return this.rad * 2;
  },
  perimeter: () => 2 * Math.PI * this.rad,
};

console.log(shape.diameter());
console.log(shape.perimeter());

//HOW TO DEEP COPY AND SHALLOW COPY

let users = {
  name: "ADITYA THAKUR",
  age: 24,
};

const objClone = Object.assign({}, users);

objClone.name = "Aditya";
console.log(users, objClone);

//DESTRUCTERING IN OBJECTS

let userism = {
  name: "Aditsffdya",
  age: 24,
  fullname: {
    firstName: "Aditsffdya",
    lastName: "Putput",
  },
};

const name = "Inevitable";

const { name: myName } = userism;
const {
  fullname: { firstName },
} = userism;
//------------------------------------------------------------------
//OBJECT REFERENCING
let c = { greetings: "Hey" };
let d;

d = c; //c is being assigned to d this is not a copy d contains c now so if we change anything in c it will show cnage in d ad well and the same is true for c
c.greetings = "hello";
console.log(d);
