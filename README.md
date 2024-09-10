function verificarEstacaoDoAno(mes) {
    switch (mes) {
        case 12:
        case 1:
        case 2:
            return "Verão";
        case 3:
        case 4:
        case 5:
            return "Outono";
        case 6:
        case 7:
        case 8:
            return "Inverno";
        case 9:
        case 10:
        case 11:
            return "Primavera";
        default:
            return "Mês inválido. Informe um número entre 1 e 12.";
    }
}

// Exemplo de uso
const mes = 9;  // Setembro
const estacao = verificarEstacaoDoAno(mes);
console.log(`A estação do ano para o mês ${mes} é: ${estacao}`);
