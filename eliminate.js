function eliminateSameNumber(arr1, arr2) {
    
    var tempArray = []
    var total = ''
    var result = ''

    for(i = 0; i < arr1.length; i++){
        var x = false
        var y = false
        for(j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                x = true
            }          
            if(arr2[i] === arr1[j]){
                y = true
            }
        }

        !x ? tempArray.push(arr1[i]) : ''
        !y ? tempArray.push(arr2[i]) : ''


    }

    //sorting function saya buat terpisah
    tempArray = sorting(tempArray)
    total = sumNumber(tempArray)
    
    return `Sorting : ${tempArray}\nSum : ${total}`

    // return tempArray

}

function sorting(arr){

    for(i = 0;i < arr.length; i++){
        var temp = ''

        for(j = 0;j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        
    }

    return arr

}

function sumNumber(arr) {
    var total = 0

    for(i = 0; i < arr.length; i++){
        total += arr[i]
    }
    
    return total
}

console.log(eliminateSameNumber([1, 3, 4, 7 , 8, 2], [1, 3, 9, 4, 7, 10]));