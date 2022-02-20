const fs = require('fs')

function csvtojson(file_csv){
    let csv = fs.readFileSync(file_csv,'utf8').split('\n')
    let keys = csv[0].split('\t')
    let datos = csv.slice(1)
    let json = []
    for (dato of datos){
        let obj = {}
        let fila = dato.split('\t')
        for (num in  keys){
            obj[keys[num]] = fila[num]
        }
        json.push(obj)
    }
    let nombrearchivo = file_csv.split('.')
    fs.writeFileSync(nombrearchivo[0]+'.json',JSON.stringify(json))
}


csvtojson('test.csv')
