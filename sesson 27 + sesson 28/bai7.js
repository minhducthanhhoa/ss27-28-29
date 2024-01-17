
let userInput = prompt("Nhập vào một chuỗi:");

// Hàm trả về mảng chứa tất cả các chuỗi con trong chuỗi truyền vào
function getAllSubstrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}


let result = getAllSubstrings(userInput);
console.log("Kết quả:", result);