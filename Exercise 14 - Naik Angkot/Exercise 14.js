function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var biaya = 2000
  var arrNew = []

  if (arrPenumpang.length === 0){
    return arrPenumpang
  }
 

  for (var i = 0; i < arrPenumpang.length; i++){
    // console.log(arrPenumpang[i])
    for (var j = 0; j < rute.length; j++){
      // console.log(rute[j])

      if (rute[j] === arrPenumpang[i][2]){
        var tujuan = j
        // console.log(tujuan)
      } else if (rute[j] === arrPenumpang[i][1]){
        var naik = j
        // console.log(naik)
      }
    var bayar = biaya * (tujuan - naik)
    }

      
      var obj = {}
      obj.penumpang = arrPenumpang[i][0]
      obj.naikDari = arrPenumpang[i][1]
      obj.tujuan = arrPenumpang[i][2]
      obj.bayar = Math.abs(bayar)
      arrNew.push(obj)
  }
  return arrNew
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]