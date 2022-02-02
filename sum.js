const numbers = [12, 313, 434, 423, 323];
let sum = 0;
for (i = 0; i <= numbers.length; i++) {
  const element = numbers[i];
  sum = sum + element;
}
// // console.log(sum);

function arrayTotal(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const total = arrayTotal([23, 45, 67]);
console.log(total);