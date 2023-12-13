let nome = "Mundo";

console.log("Olá, " + nome + "! Este é um exemplo de código JavaScript.");

if (nome === "Mundo") {
    console.log("Você é o Mundo!");
} else {
    console.log("Você não é o Mundo, mas olá de qualquer forma!");
}

function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("Usuário"));

let frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta: " + frutas[i]);
}

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Profissão: " + pessoa.profissao);