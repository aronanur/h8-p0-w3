function targetTerdekat(arr) {
    var tempJarak = []
    var x = []
    var o = []

    for(i = 0; i < arr.length; i++){
        if(arr[i] === 'x'){
            x.push(i)
        }else if(arr[i] === 'o'){
            o.push(i)
        }
    }

    if(x.length === 0){
        return 0
    }

    for(i = 0; i < o.length; i++){
        var range = 0        
        for(j = 0; j < x.length; j++){
            range = Math.abs(o[i] - x[j])
            tempJarak.push(range)
        }
    }

    var result = tempJarak[0]
    for(i = 1; i < tempJarak.length; i++){
        
        if(tempJarak[i] <= result){
            result = tempJarak[i]
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