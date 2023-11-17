class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }

  cube(num) {
    return num * num * num;
  }

  power(num1, num2) {
    return Math.pow(num1, num2);
  }
}

const calci = new ScientificCalculator();

console.log(calci.add.call(this, 10, 5));
console.log(calci.subtract.apply(this, [10, 5]));

function multiplyByTwo(num) {
  return num * 2;
}
function powerOfThree(num) {
  return Math.pow(num, 3);
}

const into2 = multiplyByTwo.bind(calci, 5);
const raisedTo3 = powerOfThree.bind(calci, 2);

console.log(into2());
console.log(raisedTo3());
