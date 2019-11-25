function targetTerdekat(arr) {
    var positionX = ''
    var positionO = ''
    var result = 0

    for(i = 0; i < arr.length; i++){

        if(arr[i] === 'o'){
            positionO = i
        }else if(arr[i] === 'x'){
            positionX = i
        }


        if(positionX !== '' && positionO !== ''){
            result = Math.abs(positionO - positionX)
            return result
        }

    }

    return result
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2