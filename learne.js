function verificarFaixaEtaria(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (idade < 0) {
        return "Ano de nascimento inválido";
    } else if (idade <= 12) {
        return "Criança";
    } else if (idade <= 17) {
        return "Jovem";
    } else if (idade <= 64) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

// Exemplo de uso
const anoNascimento = 1990;
const faixaEtaria = verificarFaixaEtaria(anoNascimento);
console.log(`Sua faixa etária é: ${faixaEtaria}`);
