function tentukanDeretGeometri(arr) {
    var countInvalid = 0 
    var prevNumber   = 1
    var result       = ''

    for(i = 0; i < arr.length ; i++){

        prevNumber = i > 0 ? arr[i - 1] : 1

        if(arr[i] % prevNumber !== 0){
            countInvalid += 1
        }

    }

    result = countInvalid === 0 ? true : false 

    return result

  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false