function positiveSum(arr){
    let result = 0
  
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            result += arr[i]
        }
    }
  
    return result
  }
  
//   console.log(positiveSum([1,2,3,4,5]))
//   console.log(positiveSum([-1,2,3,4,-5]))

//   

function findShort(kalimat){
    let arrKalimat = kalimat.split(' ') // [Purwadhika, Digital, School]
    
    let panjangKarakter = 0 

    for(let i=0; i < arrKalimat.length; i++){       // i=0, Purwadhika, panjangKarakter = 10
        if(i == 0){                                 // i=1, Digital, panjangKarakter = 7
            panjangKarakter = arrKalimat[i].length  // i=2, School, panjangKarakter = 6
        }

        if(arrKalimat[i].length < panjangKarakter){
            panjangKarakter = arrKalimat[i].length
        }
    }

    return panjangKarakter
}

// console.log(findShort('Purwadhika Digital School'))

// 

function alphabetPosition(text){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for(let i=0; i < text.length; i++){
        for(let j=0; j < alphabets.length; j++){
            if(text[i].toLowerCase() == alphabets[j]){
                result += `${j+1} `
            }
        }
    }

    console.log(result)
}

alphabetPosition('Have you done your homework?')

// 

// MULTIPLICATION TABLE
// Ex.  1 2 3  ||  i = 1; j = 1, 2, 3 ---> Looping inside : i*j
//      2 4 6  ||  i = 2; j = 2, 4, 6
//      3 6 9  ||  i = 3; j = 3, 6, 9

function multiplicationTable(a, b){
    let output = ''

    for(let i=1; i <= a; i++){
        for(let j=1; j <= b; j++){
            output += `${i*j} `
        }

        output += `\n`
    }

    console.log(output)
}

multiplicationTable(3, 3)

// 
// 
// 

console.log(String.fromCharCode(65));