function shoppingTime(memberId, money) {
  // you can only write your code here!
  var obj = {}
    obj.memberId = memberId
    obj.money = money
  var itemList = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
  var itemPrice = [1500000, 500000, 250000, 175000, 50000]
  var buy = []
  var totalBuy = 0
  var change = 0

  if (memberId === '') {
    return 'Mohon Maaf, Toko X Hanya Berlaku Untuk Member Saja'
  } else if (money < 50000) {
    return 'Mohon Maaf, Uang Tidak Cukup'
  } else if (!memberId){
    return 'Mohon Maaf, Toko X Hanya Berlaku Untuk Member Saja'
  }

  for (var i = 0; i < itemList.length; i++){
    if (money > itemPrice[i]){
      totalBuy = totalBuy + itemPrice[i]
      // console.log(totalBuy)
      buy.push(itemList[i])
      // console.log(buy)
      change = money - totalBuy
      // console.log(change)
    }
     obj.listPurchased = buy
     obj.changeMoney = change
  }
  return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja