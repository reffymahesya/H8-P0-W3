function changeVocals (str) {
  //code di sini
  var arrStr = str.split('');
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var hurufVokal = 'aiueoAIUEO';
  var indeks;
  var hasil = [];
  
  for (var i = 0; i < arrStr.length; i++) {
    for (var j = 0; j < hurufVokal.length; j++) {
      if (arrStr[i] === hurufVokal[j]) {
        indeks = alphabet.indexOf(arrStr[i]) + 1;
        arrStr[i] = alphabet[indeks];
      }
    }
    hasil.push(arrStr[i]);
  }
  
  return hasil;
}

function reverseWord (str) {
  //code di sini
  var balik = [];
  
  for (var i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
  
  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  var hasil = '';
  
  for (var i = 0; i < str.length; i++) {
    uppercase = str[i].toUpperCase();
    lowercase = str[i].toLowerCase();
    
    if (str[i] === uppercase) {
      hasil += lowercase;
    } else if (str[i] === lowercase) {
      hasil += uppercase;
    } else {
      hasil += str[i];
    }
  }
  
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  var hasil = str.replace(/\s+/g, '');
  
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var ubahHurufVokal = changeVocals(name);
    var balikKata = reverseWord(ubahHurufVokal);
    var balikLowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(balikLowerUpper);
    return hapusSpasi;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'