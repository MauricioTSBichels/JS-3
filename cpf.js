let cpfus = 10532260988;
let ver;

digit11();

function digit11() {
    console.log(cpfus);
    
    let digitos = cpfus.toString().split('').length;
    console.log(digitos);
    
    if (digitos === 11) {
        vercpf();
    } else {
        console.log("CPF inválido. Deve ter 11 dígitos.");
    }
}

function vercpf() {
    let cpf = cpfus.toString().split('');
    let n = 0;
    let n2 = 9;
    
    function calcularDigito(pesos) {
        let soma = 0;
        for (let i = 0; i < pesos.length; i++) {
            soma += parseInt(cpf[i]) * pesos[i];
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    let pesos1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let primeiroDigitoCalculado = calcularDigito(pesos1);
    console.log("Primeiro dígito calculado: " + primeiroDigitoCalculado);
    
    let pesos2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let segundoDigitoCalculado = calcularDigito(pesos2);
    console.log("Segundo dígito calculado: " + segundoDigitoCalculado);

    if (parseInt(cpf[9]) === primeiroDigitoCalculado && parseInt(cpf[10]) === segundoDigitoCalculado) {
        console.log("O CPF é válido!");
    } else {
        console.log("O CPF é inválido.");
    }
}
