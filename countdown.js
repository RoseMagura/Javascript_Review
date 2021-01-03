function countdown(n){
    if (n < 1) {
      return [];
      } else {
        const cdArray = countdown(n - 1);
        cdArray.unshift(n);
        return cdArray;
      }
  }

console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(countdown(5)); // [5, 4, 3, 2, 1]