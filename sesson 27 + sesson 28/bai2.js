let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

let arr = [];
for (let i = a + 1; i < b; i++){
    arr.push(i);
}

console.log(arr);