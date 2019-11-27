var names = ['arona', 'medina', 'zul', 'andi', 'alif']
var names3D = [
    ['arona', 'medina'],
    ['zul', 'andi'],
    ['alif', 'aep']
]

function findAlphabet2D(arr, alphabet){
    var result = []
    
    for(i = 0; i < arr.length; i++){
        var found = false
        for(j = 0; j < arr[i].length; j++){
            if(arr[i][j] === alphabet){
                found = true
            }
        }
        if(found){
            result.push(arr[i])
        }
    }

    return result

}

function findAlphabet3D(arr, alphabet) {
    
    var result = []

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            var found = false
            for(k = 0; k < arr[i][j].length; k++){
                if(arr[i][j][k] === alphabet){
                    found = true
                }
            }

            if(found){
                result.push(arr[i][j])
            }

        }
    }

    return result
}

console.log('============= 2 Dimensi =============')
console.log(findAlphabet2D(names, 'a'))
console.log(findAlphabet2D(names, 'i'))
console.log(findAlphabet2D(names, 'z'))
console.log(findAlphabet2D(names, 'n'))
console.log('============= 3 Dimensi =============')
console.log(findAlphabet3D(names3D, 'n'))
