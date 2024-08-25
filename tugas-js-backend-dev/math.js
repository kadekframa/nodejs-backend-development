// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.

const phi = 3.14;
const luasLingkaran = (r) => {
    return phi * r * r;
}

console.info(luasLingkaran(7));


// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const kuadratResult = (arrayAngka) => {
    let newArray = arrayAngka.map((angka) => {
        return angka * angka;
    })

    console.info(newArray);
    console.info(...newArray);
}

kuadratResult(numbers);