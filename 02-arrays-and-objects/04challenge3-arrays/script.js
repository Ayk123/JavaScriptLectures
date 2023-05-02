const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.unshift(6);
arr.push(0);
console.log(arr);

let x;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
x = arr1.slice(0, 4);
const arr3 = [...x, ...arr2];

console.log(arr3);
