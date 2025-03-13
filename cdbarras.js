function validaean (cod_barras){
    if (cod_barras.length != 13) {
        return 'código inválido'
    }

    cod_barras=cod_barras.split('')
    let soma = 0
    for (let i = 0; i<cod_barras.length - 1; i++){
        if(i % 2 != 0){
            soma += parseInt(cod_barras[i] * 3)
        } else {
            soma += parseInt(cod_barras[i])
        }
    }
    let digito = (10 - soma % 10) % 10
    if (digito != cod_barras[12]){
        return 'código inválido'
    }
    return 'código válido'
}

function procuraproduto(cod_barras){
    let pais = cod_barras.slice(0,3)
    let fabricante = cod_barras.slice(3,7)
    let produto = cod_barras.slice(7,12)
}

let codigo = '1122334455667'
let resultado = validaean (codigo)
console.log(resultado)
let produto = procuraproduto(codigo)

