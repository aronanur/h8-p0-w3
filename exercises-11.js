function tentukanDeretAritmatika(arr) {
    var range = arr[0]
    var prevNumber = 0
    var countInvalid = 0

    for(i = 0; i < arr.length;i++){
        prevNumber = i > 0 ? arr[i - 1] : 0
        if(arr[i] - prevNumber !== range){
            countInvalid += 1
        }
    }

    if(countInvalid === 0){
        return true
    }else{
        return false
    }
    
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false