// Variable -> Merupakan sebuah tempat untuk menyimpan data

// VAR x LET x CONST
// ### var ###
// 1. Kita dapat membuat variable dengan nama yg sama
var nama = 'Ryan'
var nama = 'Defryan'
console.log(nama)

// 2. Tidak mengenal scope
var school = 'Purwadhika BSD'

{
    var school = 'Purwadhika Jakarta'
}

console.log(school)

// 3. Valuenya dapat diubah

// ### let ###
// 1. Kita TIDAK DAPAT membuat variable dengan nama yg sama
// 2. Mengenal scope
// 3. Valuenya dapat diubah

// ### const ###
// 1. Kita TIDAK DAPAT membuat variable dengan nama yg sama
// 2. Mengenal scope
// 3. Valuenya TIDAK DAPAT diubah
