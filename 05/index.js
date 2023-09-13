const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

let aulasPrograma = ["aula1","aula2","aula3","aula4"]

for(let item of aulasPrograma){
    curso.aulas.push(item)
}

console.log(curso.aulas)