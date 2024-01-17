
let arr = [5, 2, 9, 1, 3, 7, 4, 6, 8];

// Sắp xếp mảng theo thứ tự ngẫu nhiên
arr.sort(function () {
  return 0.5 - Math.random();
});
console.log("Mảng sau khi sắp xếp ngẫu nhiên:", arr);