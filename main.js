const alunos = [
    { nome: 'Lorenzo', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'victor', nota: 4 }
];

function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log('Alunos aprovados:');
console.log(alunosAprovadosArray);