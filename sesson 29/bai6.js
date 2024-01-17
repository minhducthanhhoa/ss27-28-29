let myString = "hello world";

// Hàm trả về chuỗi được truyền vào nhưng viết hoa tất cả các chữ cái đầu
function capitalizeFirstLetter(str) {
  let words = str.split(" ");
  let capitalizedWords = [];
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }
  
  return capitalizedWords.join(" ");
}

let result = capitalizeFirstLetter(myString);
console.log("Chuỗi sau khi viết hoa chữ cái đầu:", result);