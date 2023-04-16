import * as readline from 'readline';

class Aluno {
  static lastId: number = 0;
  id: number;
  nome: string;
  nota1: number;
  nota2: number;
  media: number;

  constructor(nome: string, nota1: number = 0, nota2: number = 0) {
    Aluno.lastId++;
    this.id = Aluno.lastId;
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = this.calcularMedia();
  }

  calcularMedia(): number {
    const media = (this.nota1 + this.nota2) / 2;
    return media;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alunos: Aluno[] = [];

function matricularAluno() {
  rl.question("Digite o nome do aluno: ", function(nome) {
    const aluno = new Aluno(nome);
    alunos.push(aluno);
    console.log(`O aluno ${aluno.nome} com ID ${aluno.id} foi matriculado.`);
    menu();
  });
}

function adicionarNotas() {
  rl.question("Digite o ID do aluno: ", function(id) {
    const aluno = alunos.find(a => a.id === Number(id));
    if (aluno) {
      rl.question("Digite a primeira nota: ", function(nota1) {
        rl.question("Digite a segunda nota: ", function(nota2) {
          aluno.nota1 = Number(nota1);
          aluno.nota2 = Number(nota2);
          aluno.media = aluno.calcularMedia();
          console.log(`Notas do aluno ${aluno.nome} com ID ${aluno.id} atualizadas.`);
          menu();
        });
      });
    } else {
      console.log(`Aluno com ID ${id} não encontrado.`);
      menu();
    }
  });
}

function visualizarNotas() {
  alunos.forEach(aluno => {
    console.log(`ID: ${aluno.id} | Nome: ${aluno.nome} | Nota 1: ${aluno.nota1} | Nota 2: ${aluno.nota2} | Média: ${aluno.media}`);
  });
  menu();
}

function verificarMatricula() {
    const alunosAprovados = alunos.filter(a => a.media >= 7);
    if (alunosAprovados.length > 0){
      console.log("\nAlunos aprovados:");
      alunosAprovados.forEach(aluno => {
        console.log(`ID: ${aluno.id} | Nome: ${aluno.nome} | Média: ${aluno.media}`);
      });
    } else {
      console.log("Não há alunos aprovados.");
    }
    menu();
  }
  
  function alunosRecuperacao() {
    const alunosRecuperacao = alunos.filter(a => a.media >= 5 && a.media < 7);
    if (alunosRecuperacao.length > 0) {
      console.log("\nAlunos em recuperação:");
      alunosRecuperacao.forEach(aluno => {
        console.log(`ID: ${aluno.id} | Nome: ${aluno.nome} | Média: ${aluno.media}`);
      });
    } else {
      console.log("Não há alunos em recuperação.");
    }
    menu();
  }
  
  function alunosReprovados() {
    const alunosReprovados = alunos.filter(a => a.media < 5);
    if (alunosReprovados.length > 0) {
      console.log("Alunos reprovados:");
      alunosReprovados.forEach(aluno => {
        console.log(`ID: ${aluno.id} | Nome: ${aluno.nome} | Média: ${aluno.media}`);
      });
    } else {
      console.log("Não há alunos reprovados.");
    }
    menu();
  }

function menu() {
    rl.question("\nO que deseja fazer?\n1 - Matricular aluno \n2 - Adicionar notas \n3 - Visualizar notas \n-----------------\n4 - Alunos aprovados \n5 - Alunos em recuperação \n6 - Alunos reprovados \n7 - Sair\n\nDigite apenas uma das opções acima:  ", function(opcao) {
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