function changeMe(arr) {
  // you can only write your code here!
 if (arr.length === 0) {
    console.log('""')
  }
  
  for (var i = 0; i < arr.length; i++){
    var obj = {}
    var years = 2019
    var ageCalculation = years - arr[i][3]
   
    obj.firstName = arr[i][0]
    obj.lastName = arr [i][1]
    obj.gender = arr [i][2]
    if (arr[i][3] === undefined){
      obj.age = 'Invalid Birth Year'
    } else if (arr[i][3] > years){
      obj.age = 'You should not be born yet'
    }
    else {
      obj.age = Math.abs(ageCalculation)
    }
  console.log(obj)
  }  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""