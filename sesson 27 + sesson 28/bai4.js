let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = [];
let oddArr = [];

// Chia mảng ban đầu thành hai mảng riêng biệt
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  } else {
    oddArr.push(arr[i]);
  }
}

// In hai mảng ra màn hình console
console.log("Mảng chẵn:", evenArr);
console.log("Mảng lẻ:", oddArr);