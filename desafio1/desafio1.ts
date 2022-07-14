interface IFuncionario {
    code: number, 
    name: string,
}

let employee: IFuncionario = {
    code: 10,
    name: "John",
};

let codigo = employee.code;
let nome = employee.name;

console.log(`Desafio 1 \nCódigo: ${codigo} / Nome: ${nome}`);