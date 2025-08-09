/*      JSON - JavaScrip Object Notation

    - Padrao de troca e armazenamento de informaçoes
    - Padrao logico simples
    - Leve para ser enviado e recebido
    - Simples e facil de entender
    - Derivado do JavaScript
    - Utiliza o formato chave/valor
*/

const user = {
    nome: 'Rodolfo',
    idade: 31,
    filhos: null,
    hobbies: ['Codar', 'Filmes', 'Séries', 'Academia'],
    casado: true,
    empresa: {
        devclub: {
            fundada: 2021,
            colaboradores: 40
        },
        monsterapp: {
            fundada: 2021,
            colaboradores: 4
        },
        atlas: {
            fundada: 2023,
            colaboradores: 5
        },
        agendasua: {
            fundada: 2023,
            colaboradores: 4
        }
    }
}

const userJson = JSON.stringify(user) //converte de JS para JSON
console.log(userJson);

const userJsonToJs = JSON.parse(userJson) // converte de JSON para JS
console.log(userJsonToJs);