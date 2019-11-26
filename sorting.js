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

console.log(sorting(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(sorting(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
