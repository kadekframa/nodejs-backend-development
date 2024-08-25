// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.

let number1 = 1;
var number2= 2;
const phi = 3.14;


// Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.

// Tipe data primitif.
let sayHallo = "Hallo";
let myNumber = 10;
let isValidate = true;
let wadah = null;
let brand;

console.info(sayHallo);
console.info(myNumber);
console.info(isValidate);
console.info(wadah);
console.info(brand);

// Tipe data non primitif.
let person = {
    name: "Kadek",
    age: 17,
    address: "Bali",
}
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10];

console.info(person);
console.info(arrayNumbers);


// Operator aritmatika.
let x = 20;
let y = 30;

let tambah = x + y;
let kurang = x - y;
let kali = x * y;
let bagi = x / y;
let modulo = x % y;

console.info(tambah);
console.info(kurang);
console.info(kali);
console.info(bagi);
console.info(modulo);


// Operator perbandingan.
let p = 20;
let q = '20';

console.info(p == q);
console.info(p === q);
console.info(p != q);
console.info(p !== q);
console.info(p < q);
console.info(p <= q);
console.info(p > q);
console.info(p >= q);