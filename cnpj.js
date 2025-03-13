function multiplicarnumeros (array_base, array_multiplicação){

    let soma = 0
    for (let i = 0; i<array_base.length; i++){
        soma += array_base[i] * array_multiplicação[i]
    } 
    let resto = soma%11
    let digito1
    if (resto < 2){
        digito1 = 0
    } else {
        digito1 = 11 - resto
    }
    return digito1
}

function gerarcnpj () {
    let numero_base = Math.floor (Math.random() * 100000000)
    numero_base = numero_base.toString() + '0001'
    let array_base = numero_base.split('')
    let array_multiplicação = [5,4,3,2,9,8,7,6,5,4,3,2]
    let digito1 = multiplicarnumeros(array_base, array_multiplicação)
    array_base.push(digito1.toString())
    array_multiplicação.unshift(6)
    let digito2 = multiplicarnumeros(array_base, array_multiplicação)
    array_base.push(digito2.toString())
    return array_base.join('')

}
let cnpj = gerarcnpj()
console.log(cnpj)
