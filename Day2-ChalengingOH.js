// Chalenge-1
// Ubahlah Sebuah Text Menjadi Sebuah Text Berhashtag
// Ex.  Input: hello world
//      Output: #HelloWorld

//      Input: saya makan
//      Output: #SayaMakan

function hashtag(str){
    let arrStr = str.split(" ") // ["hello", "world"]
    let output = "#"

    for(let i=0; i < arrStr.length; i++){ // i=0
        let strLoop = arrStr[i] // hello

        for(let j=0; j < strLoop.length; j++){ // i=0 -> "hello"
            if(j === 0){
                output += strLoop[j].toUpperCase()
            }else{
                output += strLoop[j]
            }
        }
    }

    return output
}

console.log(hashtag("hello world"))

// 

// Chalenge-2
// Untuk Menentukan Hasil Suit Indonesia Antara Gajah, Manusia & Semut
// Ex.  Player1: Gajah
//      Player2: Semut
//      Result: Semut Menang

//      Player1: Manusia
//      Player2: Gajah
//      Result: Gajah Menang

function suitIndo(player1, player2){
    if(player1 === "Gajah" && player2 === "Semut" || player1 === "Semut" && player2 === "Gajah"){
        console.log("Semut Menang")
    }else if(player1 === "Gajah" && player2 === "Manusia" || player1 === "Manusia" && player2 === "Gajah"){
        console.log("Gajah Menang")
    }else if(player1 === "Manusia" && player2 === "Semut" || player1 === "Semut" && player2 === "Manusia"){
        console.log("Manusia Menang")
    }else{
        console.log("Seri")
    }
}

suitIndo("Gajah", "Semut")
suitIndo("Manusia", "Semut")
suitIndo("Manusia", "Manusia")

// 

// Chalenge-3
// Hitunglah Jumlah Huruf Vokal yg Ada di Dalam Sebuah Kalimat
// Ex.  Input   : "Purwadhika School"
//      Output  : "Terdapat 6 Huruf Vokal"

function countVowel(str){
    let vowel = "aiueo"
    let count = 0

    for(let i=0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++
        }
    }

    console.log(count)
}

countVowel("Ryan Defryan")

// Chalenge-4
// Palindrome
// Ex.  Input: "Katak" ---> "kataK"
//      Output: true

//      Input: "Makan" ---> "nakaM"
//      Output: false

//      Input: "Malam" ---> "malaM"
//      Output: true

// masdefry20@gmail.com ---> Besok, 8 Pagi