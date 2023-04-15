function numberOfPrimes(n) {
  const arr = new Array(n + 1).fill(true);

  arr[0] = false;
  arr[1] = true;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (arr[i]) count++;
  }

  console.log(count);
}

numberOfPrimes(50);
