let array = ["Hello", "World", "JavaScript", "OpenAI", "Assistant"];

let inputString = prompt("Nhập vào một chuỗi:");

// Hàm trả về tất cả các phần tử trong mảng có chứa chuỗi nhập vào
function findMatchingElements(arr, str) {
  let matchingElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      matchingElements.push(arr[i]);
    }
  }
  return matchingElements;
}

let result = findMatchingElements(array, inputString);
console.log("Các phần tử trong mảng có chứa chuỗi vừa nhập:", result);