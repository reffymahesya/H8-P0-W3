function checkAB(num) {
  // you can only write your code here!
  var checkA = ''
  var checkB = ''

  for (var i = 0; i < num.length; i++){
    if (num[i] === 'a'){
      checkA = i
      // console.log(checkA)
    } else if (num[i] === 'b'){
      checkB = i
      // console.log(checkB)
    }
  }
  return checkA - checkB === 4 || checkB - checkA === 4
}



// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false