function counter() {
  let count = 0;

  function incrementCount() {
    count++;
    return count;
  }

  return incrementCount;
}

const firstCounter = counter();
const secondCounter = counter();

firstValues = [];
secondValues = [];

for (let i = 0; i < 5; i++) firstValues.push(firstCounter());

for (let i = 0; i < 3; i++) secondValues.push(secondCounter());

console.log(`FirstValues array: ${firstValues}`);
console.log(`SecondValues array: ${secondValues}`);
