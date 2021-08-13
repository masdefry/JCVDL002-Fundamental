// Palindrome
// Ex.  Text    : "Makan" ---> "nakaM"
//      Output  : "Bukan Merupakan Palindrome"

//      Text    : "Malam" ---> "malaM"
//      Output  : "Malam Merupakan Palindrome"

// Katak ---> kataK
// Apa ---> apA

// Step1. Kita memiliki "Katak" yg kita simpan ke dalam parameter str
// Step2. Looping ---> Dari akhir ke awal
// Step3. Simpan hasil looping ke variabel baru
// Step4. Kita bandingkan apakah hasil yg ada di variabel baru sama dengan kata aslinya

function kataPalindrome(str){
    let reverseStr = ''

    for(let i=str.length-1; i >= 0; i--){ // i=4 true ---> i=3 true ... i=1 true ---> i=0 true
        reverseStr += str[i] // i=4 ---> "k" || i=3 ---> "ka" ... i=1 ---> "kata" || i=0 ---> "kataK"
    }

    // str = Katak
    // reverseStr = kataK

    if(str.toLowerCase() === reverseStr.toLowerCase()){
        console.log(`${str} Merupakan Kata Palindrome`)
    }else{
        console.log(`${str} Bukan Merupakan Kata Palindrome`)
    }
}

kataPalindrome("Katak")
kataPalindrome("Makan")

// 

// Caesar Chiper
// Ex.  Text: "abcd"
//      Output: "cdef"

// Step1. Memiliki data alpabet
// Step2. Cari huruf tersebut ada di index ke-berapa
// Step3. Kita +=2 index dari huruf tersebut

function caesarChiper(kalimat){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let output = ''

    for(let i=0; i < kalimat.length; i++){
        let indexOf = alphabet.indexOf(kalimat[i].toLowerCase())
        let indexOfPlus2 = indexOf + 2

        if(indexOfPlus2 > 25){
            indexOfPlus2 -= alphabet.length
        }

        output += alphabet[indexOfPlus2]
    }

    console.log(output)
}

caesarChiper("Apa") // crc
caesarChiper("xyz") // zab

// 

// ForEach, Filter, Map

// For Loop
let array = [1, 2, 3, 4, 5]

for(let i=0; i < array.length; i++){
    console.log(array[i])
}

array.forEach(value => console.log(value))

array = array.filter(value => value < 3)
console.log(array)