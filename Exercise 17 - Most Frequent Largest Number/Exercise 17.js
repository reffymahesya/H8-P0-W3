 function sorting(arrNumber) {
  // code di sini
  var a = arrNumber.length

  for (var i = 0; i < a; i++){
    // console.log(arr[i])
    for (var j = 0; j <= (a - i - 1); j++){
    // console.log(arr[j])
    // console.log(arr[i] + '-' + arr[j])
       if (arrNumber[j] < arrNumber[j + 1]){
          var temp = arrNumber[j]
          arrNumber[j] = arrNumber[j + 1]
          arrNumber[j + 1] = temp
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var jumlah = 0

  for (var k = 0; k < arrNumber.length; k++){
    if (arrNumber[0] === arrNumber[k]){
      jumlah++
    }
  }

  var hasil =  'Angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + jumlah + ' kali'

  if (arrNumber.length === 0){
    return 'Tidak ada data!'
  } else {
    return hasil
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''