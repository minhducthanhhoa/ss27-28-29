let inputString = prompt("Nhập vào một chuỗi:");
let inputCharacter = prompt("Nhập vào một ký tự:");

// Hàm đếm số lần xuất hiện của ký tự trong chuỗi
function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

let result = countCharacterOccurrences(inputString, inputCharacter);
console.log(
  `Số lần xuất hiện của ký tự '${inputCharacter}' trong chuỗi '${inputString}':`,
  result
);