let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

console.log(userCheck.test('Jo')); // true
console.log(userCheck.test('Oceans11')); // true
console.log(userCheck.test('RegexGuru')); // true
console.log(userCheck.test('007')); // false
console.log(userCheck.test('9')); // false
console.log(userCheck.test('A1')); // false

console.log(userCheck.test('BadUs3rnam3')); // false
console.log(userCheck.test('Z97')); // true
console.log(userCheck.test('c57bT3')); // false

console.log(userCheck.test('AB1')); // true
