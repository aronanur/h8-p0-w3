function targetTerdekat(arr) {
    var positionX = '';
    var positionO = '';
    var countX    = 0;
    var countO    = 0;
    var hasil     = 0;

    for(i = 0; i < arr.length;i++){

        if(arr[i] === 'x'){
            positionX = i;
            countX += 1;
        }else if(arr[i] === 'o'){
            positionO = i;
            countO += 1;
        }

        if(countO > 0 && countX > 0){
             hasil = Math.abs(positionO - positionX); //kalo udah ketemu langsung return aja
             return hasil; //kenapa di return karena bilangan pertama yang ketemu berarti itu yg terdekat
        }

    }
    return hasil;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2