function findDays(arr) {
  if (arr.length < 3) {
    return 0;
  }
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i + 2; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      if (i != j+1) {
      newArr.push(sum);
      }
    }
  }
  return Math.max(...newArr);
}

let arr = [4, 10, 3, 1, 5];
console.log(findDays(arr));
