// Class Object -> Digunakan untuk membuat properti dengan nama yg sama
// Siswa1: Nama=Rasyad, Status=WNI, Umur=15
// Siswa2: Nama=Ginanda, Status=WNI, Umur=15

class Siswa{
    constructor(nama, status, umur){
        this.nama = nama;
        this.status = status;
        this.umur = umur;
    }
}

let arrSiswa = [new Siswa("Rasyad", "WNI", 15)]
console.log(arrSiswa)