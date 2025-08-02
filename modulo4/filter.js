/* 
    FILTER

    const nocaArray = arrayOriginal.filter((valorAtual, indice, arrayOriginal) =>{
            seu código aqui
        })

        1) O filter vai passar por todos os itens do array, e o primeiro parametro é cada
        item, um por vez do array que estamos filtrando. Item OBRIGATORIO
        2) O indice é a posição atual que estamos filtrando. Item OPCIONAL
        3) Uma cópia do array original. Item OPCIONAL

    A cada item, fazemos uma 'pergunta' ao codigo. Se a resposta for verdadeira
    naquele item, ele guardará o valorAtual no novo array. Caso seja falso, o valor
    será descartado.

    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parametros
        - item do arrya
        - index
        - array completo

        return true -> Item atual passa pro novo array
        return false -> Item atual NÃO passo pro novo array
*/

// const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

// const newList = list.filter((number) => {
//     if (number > 100) return true
//     else return false
// })

// console.log(newList);

const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hym Suk", foundedOn: 1938 },
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
    { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
]

const newCompanies = companies.filter((company) => (company.marketValue < 200 && company.foundedOn > 1990), {})

console.log(newCompanies);

