let declaredString = "Hello World";
let userInput = prompt("Nhập vào một chuỗi:");

// Hàm kiểm tra xem có thể tạo ra chuỗi đã nhập vào từ các ký tự trong chuỗi đã khai báo hay không
function canCreateString(declaredStr, inputStr) {
  let charCount = {};

  // Đếm số lần xuất hiện của từng ký tự trong chuỗi đã khai báo
  for (let i = 0; i < declaredStr.length; i++) {
    let char = declaredStr.charAt(i);
    if (charCount.hasOwnProperty(char)) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Kiểm tra xem chuỗi đã nhập vào có thể tạo ra từ các ký tự trong chuỗi đã khai báo hay không
  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr.charAt(i);
    if (charCount.hasOwnProperty(char)) {
      charCount[char]--;
      if (charCount[char] === 0) {
        delete charCount[char];
      }
    } else {
      return false;
    }
  }

  return true;
}

let result = canCreateString(declaredString, userInput);
console.log("Có thể tạo ra chuỗi đã nhập từ các ký tự trong chuỗi đã khai báo:", result);