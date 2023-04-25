# :page_with_curl: Introdução
Realização de um trabalho escolar com o intuito de por em prática o conteúdo que foi ensinado durante as aulas da disciplina de Programação de Computadores e Programação Orientada a Objetos.

Este projeto foi desenvolvido em TypeScript e é uma aplicação que permite gerenciar informações dos aluno com base em sua média.

(A aplicação utiliza a biblioteca readline para interação com o usuário através do terminal.)

## :warning: Pré-requisitos
```
- Node.js
- TypeScript
```

## :star2: Como executar

Clone o repositório na sua máquina.
```
git clone https://github.com/pedroigorsf/poo-console-school.git
```

Execute o comando para instalar as dependências.
```
npm install --save-dev @types/node
```

Execute o comando para iniciar o sistema.
```
node index.ts
```




## :loudspeaker: Funcionalidades
- **Matricular aluno:** permite que o usuário matricule um aluno no sistema, digitando o nome do aluno. A partir disso, é gerado um ID único e o aluno é armazenado na lista de alunos do sistema.
- **Adicionar notas:** permite que o usuário adicione as notas do aluno, digitando o ID do aluno e em seguida a primeira nota e a segunda nota. Com base nas notas informadas, é calculada a média do aluno.
- **Visualizar notas:** permite que o usuário visualize as notas de todos os alunos matriculados no sistema, mostrando o ID do aluno, o nome, a primeira nota, a segunda nota e a média.
- **Alunos aprovados:** mostra uma lista dos alunos que foram aprovados, ou seja, que tiveram média igual ou superior a 7.
- **Alunos em recuperação:** mostra uma lista dos alunos que estão em recuperação, ou seja, que tiveram média igual ou superior a 5 e inferior a 7.
- **Alunos reprovados:** mostra uma lista dos alunos que foram reprovados, ou seja, que tiveram média inferior a 5.
- **Sair:** encerra a execução do programa.

