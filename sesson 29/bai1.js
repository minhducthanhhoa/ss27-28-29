let number1 = Math.floor(Math.random() * 100); // Số ngẫu nhiên từ 0 đến 99
let number2 = Math.floor(Math.random() * 100);
let number3 = Math.floor(Math.random() * 100);

// Hàm kiểm tra số chẵn lẻ
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Số " + number + " là số chẵn";
  } else {
    return "Số " + number + " là số lẻ";
  }
}

// Gọi hàm kiểm tra số chẵn lẻ và in kết quả ra màn hình console
console.log(checkEvenOdd(number1));
console.log(checkEvenOdd(number2));
console.log(checkEvenOdd(number3));