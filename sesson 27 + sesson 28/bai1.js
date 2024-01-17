const mangSoNguyen = [10, 5, 6, 8, 13, 56, 43, 44];

let max = mangSoNguyen[0];
let min = mangSoNguyen[0];

for (let i = 1; i < mangSoNguyen.length; i++){
    if (mangSoNguyen[i] > max) {
        max = mangSoNguyen[i];
    }
    
    if (mangSoNguyen[i] < min) {
        min = mangSoNguyen[i];
    }
}
console.log("Phần tử lớn nhất: ", max);
console.log("Phần tử nhỏ nhất: ", min);