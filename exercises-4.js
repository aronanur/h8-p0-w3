//belum fix untuk hasilnya bentukan arraynya ga keliatan
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){

    var hasil = ''

    input.splice(1,2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    input.splice(4, 1, "Pria", "SMA Internasional Metro")

    var spliceTTL = input[3].split('/')
    var bulan     = konversiNamaBulan(spliceTTL[1])
    var sortDesc  = spliceTTL.sort(function(value1, value2){ return value2 - value1 })
    var dateFormat= input[3].split('/').join('-')
    var name      = input[1].slice(0, 14);

    hasil += `${input} \n${bulan} \n${sortDesc} \n${dateFormat} \n${name}`

    return hasil

}

function konversiNamaBulan(bulan){
    switch (Number(bulan)) {
        case 01:
            return 'Januari'
            break;
        case 02:
            return 'Februari' 
            break;
        case 03:
            return 'Maret'
            break;
        case 04:
            return 'April'
            break;
        case 05:
            return 'Mei'
            break;
        case 06:
            return 'Juni'
            break;
        case 07:
            return 'Juli'
            break;
        case 08:
            return 'Agustus'
            break;
        case 09:
            return 'September'
            break;
        case 10:
            return 'Oktober'
            break;
        case 11:
            return 'November'
            break;
        case 12:
            return 'Desember'
            break;
        default:
            break;
    }
}

console.log(dataHandling2(input))

