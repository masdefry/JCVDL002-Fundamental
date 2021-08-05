// Exercise 1.1 : X, Y, Z
// let x = 4
// let y = 3
// let z = 2

// let w = Math.pow((x + (y * z)) / (x * y), z)
// console.log(w)

// Exercise 1.3 : Kuadrat Pangkat 3
// let angka = 8
// console.log(Math.cbrt(8))

// Exercise 1.4 : 485 Hari
// let days = 485

// let tahun = Math.floor(days/360)
// let sisaBagiTahun = days % 360

// let bulan = Math.floor(sisaBagiTahun/30)
// let sisaBagiBulan = sisaBagiTahun % 30

// let minggu = Math.floor(sisaBagiBulan/7)
// let sisaBagiMinggu = sisaBagiBulan % 7

// let hari = sisaBagiMinggu

// console.log(`${days} = ${tahun} Tahun, ${bulan} Bulan, ${minggu} Minggu, ${hari} Hari`)

// Exercise 2.2 : Menentukan Berat Badan Seseorang
// let beratBadan = 80
// let tinggiBadan = 1.68

// let imt = beratBadan / Math.pow(tinggiBadan, 2)

// let hasil = ''
// if(imt < 18.5){
//     hasil += 'Berat badan kurang'
// }else if(imt >= 18.5 && imt <= 24.9){
//     hasil += 'Berat badan ideal'
// }else if(imt >= 25 && imt <= 29.9){
//     hasil += 'Berat badan berlebih'
// }else if(imt >= 30 && imt <= 39.9){
//     hasil += 'Berat badan sangat berlebih'
// }else{
//     hasil += 'Obesitas'
// }

// console.log(`IMT = ${imt}, Hasil : ${hasil}`)

// ### AH ###

// Exercise 1.1 : X, Y, Z
let x = 4
let y = 3
let z = 2

let w = Math.pow((x + (y * z)) / (x * y), z)
// console.log(w)

// Exercise 1.3 : Akar 8
let angka = 8
let hasil = Math.cbrt(angka)
// console.log(hasil)

// Exercise 1.4 : 485 Hari
let totalHari = 485

let tahun = Math.floor(totalHari / 360)
let sisaBagiTahun = totalHari % 360 // 125 Hari

let bulan = Math.floor(sisaBagiTahun / 30)
let sisaBagiBulan = sisaBagiTahun % 30 // 5 Hari

let minggu = Math.floor(sisaBagiBulan / 7)
let sisaBagiMinggu = sisaBagiBulan % 7

let hari = sisaBagiMinggu

// console.log(`485 Hari = ${tahun} Tahun, ${bulan} Bulan, ${minggu} Minggu, ${hari} Hari`)