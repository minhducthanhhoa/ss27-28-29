let arr = [1, 2, 3, 4, 5, 2, 4, 6, 1, 7];

// Tìm phần tử đầu tiên là duy nhất trong mảng
let uniqueElement = null;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count === 1) {
    uniqueElement = arr[i];
    break;
  }
}


console.log("Phần tử đầu tiên là độc nhất trong mảng:", uniqueElement);