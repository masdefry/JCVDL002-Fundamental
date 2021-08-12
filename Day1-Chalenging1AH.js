// Chalenging-1
// Tampilkan Bilangan Random Antara 1-100 & Tentukan Bilangan Tersebut Ganjil/Genap

// Step-1: Kita cari bilangan random
let randomNumber = Math.round((Math.random() * 100))

// Step-2: Kita tentukan apakah bilangan tersebut bernilai ganjil/genap
if(randomNumber % 2 === 0){
    // console.log(`Bilangan ${randomNumber} Merupakan Bilangan Genap`)
}else{
    // console.log(`Bilangan ${randomNumber} Merupakan Bilangan Ganjil`)
}

// Chalenging-2
// Tampilkan Bilangan Random Antara 1-100 & Tentukan Apakah Bilangan Tersebut Dibulatkan Ke Atas/Ke Bawah
//  Step-1: Kita cari bilangan random
let angkaAcak = Math.random() * 100

// Step-2: Kita bulatkan bilangan random sesuai dengan aturan matematika
let pembulatanAngkaAcak = Math.round(angkaAcak)

// Step-3: Kita bandingkan antara hasil step-2 dengan step-1
if(pembulatanAngkaAcak < angkaAcak){
    // console.log(`Angka ${angkaAcak} Dibulatkan Kebawah Menjadi ${pembulatanAngkaAcak}`)
}else{
    // console.log(`Angka ${angkaAcak} Dibulatkan Keatas Menjadi ${pembulatanAngkaAcak}`)
}

// Chalenging-3
// Ex. number = '11-10-5-4-3-1'
//     output = 'Total bilangan genap: 2 & total bilangan ganjil: 4'

let deretAngka = '11-10-5-4-3-1-9-1-10'
let number = '' // '' -> '1' -> '11' -> '' -> '1' -> '10' -> '' ... ... ... '' -> '9'
let totalGenap = 0 // 0 -> 1
let totalGanjil = 0 // 0 -> 1

for(let i=0; i < deretAngka.length; i++){ // i=0 -> i=1 -> i=2 -> i=3 -> i=4 -> i=5 ... ... ... i=14 -> i=15 LOOPING STOP
    if(deretAngka[i] !== '-'){
        number += deretAngka[i]
    }

    if(deretAngka[i] === '-' || i === deretAngka.length-1){
        if(parseInt(number) % 2 === 0){
            totalGenap++
        }else{
            totalGanjil++
        }

        number = ''
    }
}

console.log(`Total Bilangan Genap: ${totalGenap} & Total Bilangan Ganjil: ${totalGanjil}`)


let kata = 'Saya Defryan' // 12 - 11 


