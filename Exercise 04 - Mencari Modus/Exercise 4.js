function cariModus(arr) {
  // you can only write your code here!
  var hasil = 0
  var hitung = []
  var modes = []
  a = arr.length
  var maxIndex = 0

  for(i = 0; i < a; i += 1){
    var number = arr[i]
    hitung[number] = (hitung[number] || 0) +1
    if (hitung[number] > maxIndex) {
      maxIndex = hitung[number]
    }
  }
  for(i in hitung){
    if (hitung.hasOwnProperty(i)){
      if (hitung[i] === maxIndex){
        modes.push(Number(i))
      }
    }
  }
  return modes
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1