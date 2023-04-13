"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Aluno = /** @class */ (function () {
    function Aluno(nome, nota1, nota2) {
        if (nota1 === void 0) { nota1 = 0; }
        if (nota2 === void 0) { nota2 = 0; }
        Aluno.lastId++;
        this.id = Aluno.lastId;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = this.calcularMedia();
    }
    Aluno.prototype.calcularMedia = function () {
        var media = (this.nota1 + this.nota2) / 2;
        return media;
    };
    Aluno.lastId = 0;
    return Aluno;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var alunos = [];
function matricularAluno() {
    rl.question("Digite o nome do aluno: ", function (nome) {
        var aluno = new Aluno(nome);
        alunos.push(aluno);
        console.log("O aluno ".concat(aluno.nome, " com ID ").concat(aluno.id, " foi matriculado."));
        menu();
    });
}
function adicionarNotas() {
    rl.question("Digite o ID do aluno: ", function (id) {
        var aluno = alunos.find(function (a) { return a.id === Number(id); });
        if (aluno) {
            rl.question("Digite a primeira nota: ", function (nota1) {
                rl.question("Digite a segunda nota: ", function (nota2) {
                    aluno.nota1 = Number(nota1);
                    aluno.nota2 = Number(nota2);
                    aluno.media = aluno.calcularMedia();
                    console.log("Notas do aluno ".concat(aluno.nome, " com ID ").concat(aluno.id, " atualizadas."));
                    menu();
                });
            });
        }
        else {
            console.log("Aluno com ID ".concat(id, " n\u00E3o encontrado."));
            menu();
        }
    });
}
function visualizarNotas() {
    alunos.forEach(function (aluno) {
        console.log("ID: ".concat(aluno.id, " | Nome: ").concat(aluno.nome, " | Nota 1: ").concat(aluno.nota1, " | Nota 2: ").concat(aluno.nota2, " | M\u00E9dia: ").concat(aluno.media));
    });
    menu();
}
function verificarMatricula() {
    rl.question("Digite o ID do aluno: ", function (id) {
        var aluno = alunos.find(function (a) { return a.id === Number(id); });
        if (aluno) {
            console.log("O aluno ".concat(aluno.nome, " com ID ").concat(aluno.id, " est\u00E1 matriculado."));
            menu();
        }
        else {
            console.log("Aluno com ID ".concat(id, " n\u00E3o encontrado."));
            menu();
        }
    });
}
function alunosRecuperacao() {
    var alunosRecuperacao = alunos.filter(function (a) { return a.media >= 3 && a.media < 7; });
    if (alunosRecuperacao.length > 0) {
        console.log("Alunos em recuperação:");
        alunosRecuperacao.forEach(function (aluno) {
            console.log("ID: ".concat(aluno.id, " | Nome: ").concat(aluno.nome, " | M\u00E9dia: ").concat(aluno.media));
        });
    }
    else {
        console.log("Não há alunos em recuperação.");
    }
    menu();
}
function alunosReprovados() {
    var alunosReprovados = alunos.filter(function (a) { return a.media < 3; });
    if (alunosReprovados.length > 0) {
        console.log("Alunos reprovados:");
        alunosReprovados.forEach(function (aluno) {
            console.log("ID: ".concat(aluno.id, " | Nome: ").concat(aluno.nome, " | M\u00E9dia: ").concat(aluno.media));
        });
        menu();
    }
    else {
        console.log("Não há alunos reprovados.");
        menu();
    }
}
function menu() {
    rl.question("\n\nO que deseja fazer?\n1 - Matricular aluno \n2 - Adicionar notas \n3 - Visualizar notas \n4 - Verificar matrícula \n5 - Alunos em recuperação \n6 - Alunos reprovados \n7 - Sair\n\nDigite apenas uma das opções acima:  ", function (opcao) {
        switch (opcao) {
            case "1":
                matricularAluno();
                break;
            case "2":
                adicionarNotas();
                break;
            case "3":
                visualizarNotas();
                break;
            case "4":
                verificarMatricula();
                break;
            case "5":
                alunosRecuperacao();
                break;
            case "6":
                alunosReprovados();
                break;
            case "7":
                rl.close();
                break;
            default:
                console.log("Opção inválida, por gentileza, escolha apenas uma das opções apresentadas no menu.\n");
                menu();
        }
    });
}
menu();
