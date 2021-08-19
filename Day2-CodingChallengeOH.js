// Chalenge-1
// Tentukan Nilai Siswa Berdasarkan Jawaban yg Mereka Punya. Dengan Ketentuan Poin :
//      - Benar, +3
//      - Salah, -1
//      - Tidak Menjawab, 0

// Ex.  Kunci Jawaban: ["A", "B", "C", "A", "D"]
//      Jawaban: ["B", "B", "A", "A", ""] // -1, 3, -1, 3, 0 = 4

function PeriksaJawaban(jawaban){
    let kunciJawaban = ["A", "B", "C", "A", "D"]
    let nilai = 0

    for(let i=0; i<jawaban.length; i++){
        if(jawaban[i] === ""){
            nilai+=0
        }else if(jawaban[i] === kunciJawaban[i]){
            nilai += 3
        }else if(jawaban[i] !== kunciJawaban[i]){
            nilai--
        }
    }

    console.log(nilai)
}

PeriksaJawaban(["B", "C", "D", "A", ""])

// 

// Chalenge-2
// Ex.  arrNumber = [1, -1, 3, 5, 10]
//      Output = 19

function PlusNumber(arrNumber){
    let result = 0

    for(let i=0; i<arrNumber.length; i++){
        if(arrNumber[i] >= 0){
            result += arrNumber[i]
        }
    }

    console.log(result)
}

PlusNumber([1, -1, 3, 5, 10])

// Chalenge-3
// Ex. Text : "Abcdefghijkl"
//     Output   : "1 2 3 4 ..."

function AlphabetPosition(text){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    for(let i=0; i<text.length; i++){ // i=0 text[i] :A || i=1 text[i] :b
        for(let j=0; j<alpha.length; j++){
            if(text[i].toLowerCase() === alpha[j]){
                result += j+1
            }
        }
    }
}

AlphabetPosition("Abcdefghij")

// 

// Task-1
// Carilah Kata Terpendek dari Sebuah Kalimat
// Ex. Input: Purwadhika Digital School
//     Output: School Merupakan Kata Terpendek, Karena Hanya Memiliki 6 Karakter Huruf

// Task-2
// Multiplication Table
// Ex. Input: 3
//     Output: 1 2 3
//             2 4 6
//             3 6 9

// Input: 4
// Output: 1 2 3 4
//         2 4 6 8
//         3 6 9 12