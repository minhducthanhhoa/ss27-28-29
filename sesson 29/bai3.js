let str = "Welcome to OpenAI Assistant";

function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  return count;
}

let result = countCharacters(str);
console.log("Số ký tự trong chuỗi:", result);