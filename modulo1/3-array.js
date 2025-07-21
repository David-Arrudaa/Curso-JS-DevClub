//Array 

const users = [
    {
        nome: "David",
        idade: 32,
        nomeDoConjuge: "Rafaela",
        id: null
    }
    ,
    {
        nome: "Rafaela",
        idade: 28,
        nomeDoConjuge: "David",
        id: null
    }
]

users[1].nome = "Preta"

console.log(users[1])

console.log(users[0].nome)