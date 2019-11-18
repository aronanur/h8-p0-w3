function angkaPalindrome(num) {
    var nextNumber = num + 1
    var palindrome = false
    var result = ''
    
    while (palindrome === false) {        
        var numToString = String(nextNumber) 
        var reverseNumber = '' 

        for(i = numToString.length - 1; i >= 0;i--){
            reverseNumber += numToString[i]
        }

        if(reverseNumber === numToString){
            palindrome = true
            result = reverseNumber
        }

        nextNumber++
    }

    return result

}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001