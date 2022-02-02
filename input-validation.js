function fibonacciSeries(num) {
  if (typeof num != "number") {
    return 'Please Give a Number';
  } else if (num < 2) {
      return 'Please enter a positive number less than 2';
  }
  const fibo = [0, 1];
  for (i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

const fiboSeries = fibonacciSeries(22);
console.log(fiboSeries);
