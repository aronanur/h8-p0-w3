function tentukanDeretGeometri(arr) {

    for(i = 0; i < arr.length; i++){
        var prevNumber = i > 0 ? arr[i - 1] : arr[i]

        if(arr[i] % prevNumber !== 0){
            return false;
        }

    }

    return true

}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false