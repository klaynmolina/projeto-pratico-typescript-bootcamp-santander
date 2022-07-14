var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Padeiro";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
console.log("Pessoa 1 -> Nome: ".concat(pessoa1.nome, " / Idade: ").concat(pessoa1.idade, " / Profiss\u00E3o: ").concat(pessoa1.profissao));
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
console.log("Pessoa 2 -> Nome: ".concat(pessoa2.nome, " / Idade: ").concat(pessoa2.idade, " / Profiss\u00E3o: ").concat(pessoa2.profissao));
var pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};
console.log("Pessoa 3 -> Nome: ".concat(pessoa3.nome, " / Idade: ").concat(pessoa3.idade, " / Profiss\u00E3o: ").concat(pessoa3.profissao));
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
console.log("Pessoa 4 -> Nome: ".concat(pessoa4.nome, " / Idade: ").concat(pessoa4.idade, " / Profiss\u00E3o: ").concat(pessoa4.profissao));
