//QUESTION - IMPLEMENT sum(2)(6)(1);

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}
//-----------------------------------------------------------------------
let curriedSum = curry(sum);

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(1)(6));
//----------------------------------------------------------------------------------
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "Invalid Operation";
    };
  };
}

console.log(evaluate("subtract")(2)(4));

const mul = evaluate("multiply");

console.log(mul(2)(4));

//INFINITE CURRYING