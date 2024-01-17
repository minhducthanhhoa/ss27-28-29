let numbers = [2, 4, 6, 8, 10];

let targetSum = parseInt(prompt("Nhập vào một số nguyên:"));

// Hàm trả về một cặp số trong mảng có tổng bằng với số đã nhập vào
function findPairWithTargetSum(arr, target) {
  let complements = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = target - num;

    if (complements.hasOwnProperty(complement)) {
      return [complement, num];
    }

    complements[num] = true;
  }

  return null;
}


let result = findPairWithTargetSum(numbers, targetSum);
if (result) {
  console.log("Cặp số có tổng bằng số đã nhập:", result);
} else {
  console.log("Không tìm thấy cặp số có tổng bằng số đã nhập.");
}