function pasanganTerbesar(num) {

    var tempNumber = ''
    var biggestNumber = 0
    var numToString = String(num)
    var range = 2

    for(i = 0; i < numToString.length; i++){
        tempNumber = ''

        for(j = i; j < range + i; j++){
            tempNumber += numToString[j]
        }

        if(tempNumber > biggestNumber){
            biggestNumber = tempNumber
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