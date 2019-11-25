function palindrome(word){  
    var tempString = ''
    var result = ''

    for(i = word.length - 1;i >= 0; i--){
        tempString += word[i]
    }

    result = tempString === word ? true : false

    return result

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false