var word = ['Hello World!']

function balikString(word){
    var wordTarget = word[0]
    var resultWord = ''

    for(i = wordTarget.length - 1; i >= 0; i--){
        resultWord += wordTarget[i]
    }

    return resultWord
    
}

console.log(balikString(word))