function angkaPalindrome(num) {

    var nextNumber = num + 1
    var palindrome = false
    var tempNumber = ''
    var result = ''

    while (palindrome === false) {
        var numToString = String(nextNumber)
        tempNumber = ''

        for(i = numToString.length - 1; i >= 0;i --){
            tempNumber += numToString[i]
        }

        if(tempNumber === numToString){
            palindrome = true
            result = numToString
        }else{
            nextNumber++
        }
    }

    return result

}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001