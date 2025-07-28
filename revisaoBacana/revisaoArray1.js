let alunos = ["Renan", "Gustavo", "Maicon", "Marcelo", "João"];
console.log(alunos);
console.log(`Este é o aluno ${alunos[3]} da turma informática para internet.`);
alunos.unshift("Marcos");
alunos.push("Lucas");
alunos.pop("Gustavo");
const removido = alunos.pop();
console.log(`O aluno ${removido} foi removido da lista.`);