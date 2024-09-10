function gerenciarTarefas(listaTarefas, acao) {
    if (acao === "adicionar") {
        const descricaoTarefa = prompt("Digite a descrição da nova tarefa:");
        if (descricaoTarefa) {
            listaTarefas.push({ descricao: descricaoTarefa, concluida: false });
            console.log(`Tarefa "${descricaoTarefa}" adicionada com sucesso!`);
        } else {
            console.log("Descrição da tarefa não pode ser vazia.");
        }
    } else if (acao === "remover") {
        const tarefasPendentes = listaTarefas.filter(tarefa => !tarefa.concluida);
        console.log(`${listaTarefas.length - tarefasPendentes.length} tarefas concluídas removidas.`);
        listaTarefas.length = 0;  // Limpa a lista original
        listaTarefas.push(...tarefasPendentes);  // Reinsere as pendentes na lista
    } else if (acao === "listar") {
        const tarefasPendentes = listaTarefas.filter(tarefa => !tarefa.concluida);
        if (tarefasPendentes.length > 0) {
            console.log("Tarefas pendentes:");
            tarefasPendentes.forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa.descricao}`);
            });
        } else {
            console.log("Nenhuma tarefa pendente.");
        }
    } else {
        console.log("Ação inválida. Use 'adicionar', 'remover' ou 'listar'.");
    }
}

// Exemplo de uso
let listaTarefas = [
    { descricao: "Estudar JavaScript", concluida: false },
    { descricao: "Fazer exercícios", concluida: true },
    { descricao: "Ler um livro", concluida: false }
];

// Ação de adicionar
gerenciarTarefas(listaTarefas, "adicionar");

// Ação de listar tarefas pendentes
gerenciarTarefas(listaTarefas, "listar");

// Ação de remover tarefas concluídas
gerenciarTarefas(listaTarefas, "remover");

// Ação de listar novamente após remoção
gerenciarTarefas(listaTarefas, "listar");
