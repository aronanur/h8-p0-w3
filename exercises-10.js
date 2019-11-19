function perkalianUnik(arr) {
    var currentNumber = ''
    var result        = []

    for(i = 0; i < arr.length;i++){

        var multiplyNumber  = 1    //secara default aku isi 1 karena kalo diisi 0 maka you know lah semua angka di kaliin 0 ya bakal 0
        currentNumber       = arr[i]
        arr.splice(i, 1); //potong angka di array sesuai dengan indeks

        for(j = 0; j < arr.length; j++){

            multiplyNumber *= arr[j]

        }

        result.push(multiplyNumber)
        arr.splice(i, 0, currentNumber) //masukan kembali current number ke array

    }

    return result

  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]