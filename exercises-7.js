function hitungJumlahKata(kalimat) { 

  var sentence = []
  var tempString = ''
  var iteration = 0

  //mencoba tanpa built in function
  for(i = 0; i < kalimat.length; i++){

    if(kalimat[i] === ' '){
      i > 0 ? iteration++ : ''
      tempString = ''
    }else{
      tempString += kalimat[i]
    }
    
    if(tempString !== ''){
      sentence[iteration] = tempString
    }

  }

  return sentence.length

}
  
  // TEST CASES
  console.log(hitungJumlahKata(' I have a dream ')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5