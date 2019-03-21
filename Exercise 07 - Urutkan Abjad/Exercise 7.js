function urutkanAbjad(str) {
  // you can only write your code here!
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''


  for (var i = 0; i < abjad.length; i++){
    // console.log(abjad[i])
    for (var j = 0; j < str.length; j++){
      // console.log(str[j])
      if (abjad[i] === str[j])
      hasil = hasil + abjad[i]
    }
  }
  return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'

// return str.split('').sort().join('')