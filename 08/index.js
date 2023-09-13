const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for(let pessoa of usuarios ){
    if(pessoa.pets.length == 0){
        console.log(`${pessoa.nome} Nao possui pets`)
    }else if(pessoa.pets.length == 1){
        console.log(`${pessoa.nome} possuo 1 pet`)
    }else{
        console.log(`${pessoa.nome} possuo mais de um pet`)
    }
}