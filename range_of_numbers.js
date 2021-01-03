function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
        } else {
            const arr = rangeOfNumbers(startNum + 1, endNum);
            arr.unshift(startNum);
            return arr;
        }
      };

console.log(rangeOfNumbers(4, 4));
console.log(rangeOfNumbers(1, 5)); 
console.log(rangeOfNumbers(6, 9));