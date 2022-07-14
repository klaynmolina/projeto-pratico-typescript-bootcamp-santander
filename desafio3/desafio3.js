"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let valor = 0;
if (campoSaldo) {
    campoSaldo.innerHTML = '0';
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        valor = valor + soma;
        if (isNaN(valor) === false) {
            campoSaldo.innerHTML = String(valor);
        }
        else {
            campoSaldo.innerHTML = 'Digite um número válido.';
        }
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '0';
        valor = 0;
    }
}
if (botaoAtualizar && botaoLimpar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
