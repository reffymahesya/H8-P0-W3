function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q', 'r','s','t','u','v','w','x','y','z','a']
  var result = ''
  var a = kata.length

  for(var i = 0; i < a; i++){
    var posisi = alphabet.indexOf(kata[i])
    // console.log(posisi)
    var ubah = posisi + 1
    // console.log(ubah)
    var baru = alphabet[ubah]
    // console.log(baru)
    result += baru
  }
 return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu