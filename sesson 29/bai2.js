let array = ["apple", "banana", "orange", "watermelon", "kiwi"];

// Hàm trả về phần tử có độ dài lớn nhất trong mảng
function findLongestElement(arr) {
  let longestElement = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }
  return longestElement;
}


let result = findLongestElement(array);
console.log("Phần tử có độ dài lớn nhất trong mảng:", result);