function groupAnimals(animals) {

    var resultArray = [[]]
    var iteration = 0
    // animals.sort() //jika pake built in

    //coba buat sorting tanpa built in
    animals = sorting(animals)

    for(i = 0; i < animals.length; i++){
        prefix = i > 0 ? animals[i - 1][0] : animals[i][0]

        if(animals[i][0] !== prefix){
            resultArray.push([])
            iteration++
        }

        resultArray[iteration].push(animals[i])

    }

    return resultArray
}

function sorting(arr) {
    var temp  = ''

    //untuk descending atau ascending bisa di tentuin berdasakan di operator if kalo desc '<' kalo asc '>'

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j + 1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
