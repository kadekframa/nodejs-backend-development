// Buat program yang meminta input dari pengguna dan menggunakan struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.

const checkNumber = (angkaUser) => {
    if(angkaUser % 2 == 0) {
        console.info("Ini adalah angka Genap!");
    } else {
        console.info("Ini adalah angka Ganjil!");
    }
}

checkNumber(10);


// Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).

let namaHari;

const checkHari = (hari) => {
    switch (hari) {
        case 1:
            namaHari = "Senin";
            break;
        
        case 2:
            namaHari = "Selasa";
            break;
    
        case 3:
            namaHari = "Rabu";
            break;
    
        case 4:
            namaHari = "Kamis";
            break;
    
        case 5:
            namaHari = "Jumat";
            break;
    
        case 6:
            namaHari = "Sabtu";
            break;
        
        case 7:
            namaHari = "Minggu";
            break;
            
        default:
            namaHari = "Invalid day";
    }

    console.info(namaHari);
}

checkHari(3);