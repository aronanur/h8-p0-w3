//Cara Ke 1 pake built in function
// function hitungJumlahKata(kalimat) {
//     var splitKata = kalimat.split(' ')
//     return splitKata.length
//   }

function hitungJumlahKata(params) {
  var countWord = 1
  for(i = 0; i < params.length; i++){
    if(params[i] === ' '){
      countWord++
    }
  }

  return countWord

}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5