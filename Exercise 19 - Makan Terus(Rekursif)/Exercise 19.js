function makanTerusRekursif(waktu) {
  // you can only write your code here!if (n === 1){

  // 66 - 15 = 51
  // 51 - 15 = 36
  // 36 - 15 = 21
  // 21 - 15 = 6
  // 6 - 15 = 0
   if (waktu === 0){
    return 0
  } 
  else if (waktu <= 15){
    return 1
  }
  
  return 1 + makanTerusRekursif(waktu - 15)

// console.log(fibo(5))
}


// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0