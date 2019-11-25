function groupAnimals(animals) {

    var resultArray = [[]]
    var iteration = 0
    // animals.sort() //jika pake built in

    //tanpa built in coba metode bubble sort
    for(i = 0; i < animals.length; i++){
        for(j = 0; j < animals.length - 1; j++){
            if(animals[j] > animals[j + 1]){
                temp = animals[j]
                animals[j] = animals[j + 1]
                animals[j + 1] = temp
            }
        }
    }

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
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
