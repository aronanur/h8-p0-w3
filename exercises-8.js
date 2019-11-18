function pasanganTerbesar(num) {

    var numToString     = String(num);
    var splitNumString  = numToString.split('')
    var sliceJoinNumber = ''
    var biggestNumber   = 0

    for(i = 0; i < splitNumString.length;i++){
        sliceJoinNumber = splitNumString.slice(i, i + 2).join('')
        var currentNumber = Number(sliceJoinNumber)

        if(currentNumber > biggestNumber){
            biggestNumber = currentNumber
        }
    }

    return biggestNumber

}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99