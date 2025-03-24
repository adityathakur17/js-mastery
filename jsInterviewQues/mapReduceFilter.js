const nums = [1, 2, 3, 4];

//MAP
const multiplyThree = nums.map((inti, i, arr) => inti * 3 + i);

//FILTER
const filterNums = nums.filter((num) => {
  return num > 2;
});

//REDUCE
const sum = nums.reduce((acc, curr, i, arr) => {
  return curr + acc;
}, 0);

//POLYFILLS MAP
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyThreePolyfills = nums.myMap((inti, i, arr) => inti * 3 + i);

//POLYFILLS FILTER
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const filterNumspolyfills = nums.myFilter((num) => {
  return num > 2;
});

//POLYFILLS REDUCE
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

//MAP VS FOREACH

const arr = [2, 5, 8, 3, 7, 9];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((ar, i) => {
  ar + 2 * i;
});

let students = [
  { name: "Aditya", rollNumber: 30, marks: 80 },
  { name: "Pinki", rollNumber: 3, marks: 69 },
  { name: "Chilzi", rollNumber: 33, marks: 35 },
  { name: "Putput", rollNumber: 14, marks: 55 },
];

// let names = []

// for(let i=0;i<students.length;i++){
//     names.push(students[i].name.toUpperCase())
// }

const names = students.map((stu) => stu.name.toUpperCase());

const moreSixty = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);

const moreSixtyGFifteen = students.filter(
  (stu) => stu.marks > 60 && stu.rollNumber > 15
);

const sumMarks = students.reduce((acc, curr) => acc + curr.marks, 0);


const finalSum = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

  console.log(finalSum)
