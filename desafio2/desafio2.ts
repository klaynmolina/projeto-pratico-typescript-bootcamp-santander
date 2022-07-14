enum Profissao {
    Atriz = 'Atriz',
    Padeiro = 'Padeiro',    
}

interface IPessoa {
    nome: string;
    idade: number | string;
    profissao: Profissao;
}

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
console.log(`Pessoa 1 -> Nome: ${pessoa1.nome} / Idade: ${pessoa1.idade} / Profissão: ${pessoa1.profissao}`);


let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}
console.log(`Pessoa 2 -> Nome: ${pessoa2.nome} / Idade: ${pessoa2.idade} / Profissão: ${pessoa2.profissao}`);


let pessoa3: IPessoa = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};
console.log(`Pessoa 3 -> Nome: ${pessoa3.nome} / Idade: ${pessoa3.idade} / Profissão: ${pessoa3.profissao}`);


let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
console.log(`Pessoa 4 -> Nome: ${pessoa4.nome} / Idade: ${pessoa4.idade} / Profissão: ${pessoa4.profissao}`);
