// ##### Validasi Harga Product #####
let checkHargaValidation = true
while(checkHargaValidation === true){
    let newProductPrice = prompt("Masukan Harga Buah:") // "10000"

    for(let i=0; i<newProductPrice.length; i++){
        if(parseInt(newProductPrice[0]) < 1){ // Ketika digit pertama < 1 
            alert('Inputan Tidak Sesuai. Masukan Harga Dengan Benar!')
            break;
        }

        if(parseInt(newProductPrice[i]) >= 0){ 
            checkHargaValidation = false
        }else{
            checkHargaValidation = true
            alert('Inputan Tidak Sesuai. Masukan Harga Dengan Benar!')
            break;
        }
    }
}