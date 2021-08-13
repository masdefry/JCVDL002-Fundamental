// Chalenging-1
// Ubah Sebuah Text Menjadi Text Berhashtag
// Ex.  Input: "hello world" ---> ["hello", "world"]
//      Output: "#HelloWorld"

//      Input: "saya makan" ---> ["saya", "makan"]
//      Output: "#SayaMakan"

function hashtag(str){
    let arrStr = str.split(" ") // ["hello", "world"]
    let output = "#"

    for(let i=0; i < arrStr.length; i++){ // i=0: true|| i=1: true
        let kataStr = arrStr[i] // i=0 ---> "hello" || i=1 ---> "world"

        // Akan mendapatkan masing-masing huruf yg ada di tiap kalimat
        for(let j=0; j < kataStr.length; j++){
            if(j === 0){
                output += kataStr[j].toUpperCase() // Huruf pertama dari masing-masing diubah menjadi huruf besar dan disimpan ke output
            }else{
                output += kataStr[j]
            }
        }
    }

    console.log(output)
}

hashtag("hello world")

// 

// Chalenging-2
// Buatlah aplikasi untuk menentukan hasil suit antara 2 player
// Ex.  Player1: "Gajah"
//      Player2: "Manusia"
//      Output: "Player 1 / Gajah Menang"

//      Player1: "Semut"
//      Player2: "Manusia"
//      Output: "Player 2 / Manusia Menang"

function suit(player1, player2){
    let result = ''

    if(player1 === "Gajah" && player2 === "Manusia" || player1 === "Manusia" && player2 === "Gajah"){
        result += "Gajah Menang"
    }else if(player1 === "Gajah" && player2 === "Semut" || player1 === "Semut" && player2 === "Gajah"){
        result += "Semut Menang"
    }else if(player1 === "Manusia" && player2 === "Semut" || player1 === "Semut" && player2 === "Manusia"){
        result += "Manusia Menang"
    }

    console.log(result)
}

suit("Gajah", "Manusia")
suit("Semut", "Manusia")

// 

// Chalenging-3
// Hitung total huruf vokal yg terdapat pada sebuah kalimat ---> a, i, u, e, o
// Ex.  Str: "Purwadhika School"
//      Output: "6 Huruf Vokal"

function countVocal(text){
    let vocal = "aiueo"
    let newText = text.toLowerCase() // Merubah text menjadi lowecase
    let count = 0

    for(let i=0; i < newText.length; i++){
        if(vocal.includes(newText[i])){
            count++
        }
    }

    console.log(count)
}

countVocal("Saya Belajar")
countVocal("Saya Apa?")

// 

// Task-1
// Palindrome
// Ex.  Kata: "Malam" ---> "malaM"
//      Output: true

//      Kata: "Makan" ---> "nakaM"
//      Output: false

//      Kata: "Apa" ---> "apA"
//      Output: true

// masdefry20@gmail.com
// Besok malam, 18:00