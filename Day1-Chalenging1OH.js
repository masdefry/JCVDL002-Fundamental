// Chalenging-2
// Cara#1
// let ranNumber = Math.random() * 100
// let roundNumber = Math.round(ranNumber)

// if(roundNumber > ranNumber){
//     console.log(`Angka ${ranNumber} Akan Dibulatkan ke Atas Menjadi ${roundNumber}`)
// }else{
//     console.log(`Angka ${ranNumber} Akan Dibulatkan ke Bawah Menjadi ${roundNumber}`)
// }
// Cara#2
// let angkaRandom = Math.random() * 100
// let angkaRandomToString = angkaRandom.toString()

// let ambilAngkaSetelahKoma

// if(angkaRandom < 10){
//     ambilAngkaSetelahKoma = angkaRandomToString[2]
// }else{
//     ambilAngkaSetelahKoma = angkaRandomToString[3]
// }

// if(parseInt(ambilAngkaSetelahKoma) >= 5){
//     console.log(`Angka Tersebut ${angkaRandom} Dibulatkan ke Atas`)
// }else{
//     console.log(`Angka Tersebut ${angkaRandom} Dibulatkan ke Bawah`)
// }

// Chalenging-3
// Cara#1
let num = '10-11-15-7-8-1-3'
let arrNum = num.split('-') // ['10', '11', '15', '7', '8', '1', '3']
let totalGenap = 0
let totalGanjil = 0

for(let i=0; i < arrNum.length; i++){
    if(parseInt(arrNum[i]) % 2 === 0){
        totalGenap++
    }else{
        totalGanjil++
    }
}

console.log(`Total Angka Genap = ${totalGenap} & Total Angka Ganjil = ${totalGanjil}`)

// Cara#2
// let num1 = '10-11-15-7-8-1-3'
// let angka = '' // '1' -> '10' -> '' -> '1' -> '11' -> ... ... ... -> '3'

// let totalGenap = 0 // 1
// let totalGanjil = 0

// for(let i=0; i<num1.length; i++){
//     if(num1[i] !== '-'){
//         angka+=num1[i]
//     }

//     if(num1[i] === '-' || i === num1.length - 1){
//         if(parseInt(angka) % 2 === 0){
//             totalGenap++
//         }else{
//             totalGanjil++
//         }
//         angka = ''
//     }
// }

// console.log(totalGenap, totalGanjil)
