/* 


    REDUCE
    
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc)
    - Aceita  até 4 parametros
        - acumulador
        - valor atual
        - index
        - array completo

    const novoArray = array.original.reduce(( acumulador, valorAtual, indice, arrayOriginal) => {
            return xxxx
        }, valorInicial);

    1) O acumulador, na primeira iteração terá o valor inicial que daremos a el.
        Já nas demais iterações, e;e terá o valor que iremos acumular nele.
        Item OBRIGATORIO!!!
    2) O valor do atual elemento sendo iterado. Item OBRIGATORIO!!!
    3) O indice do elemento atual. Item OPCIONAL
    4) O array original. Item OPCIONAL
*/

// const list = [1, 2, 3, 4, 5, 6, 7]

// const soma = list.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual

// }, 0)

// console.log(soma);

//-----------------------------------------------------------------------------------

// const companier = [
//     { name: "Samsung", marketValue: 50, CEO: "Kim Hym Suk", foundedOn: 1938 },
//     { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
//     { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
//     { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
//     { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
//     { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
// ]

// const marketValue = companier.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue.marketValue
// }, 0)

// console.log(marketValue);

//-------------------------------------------------------------------------------------

const cart = [
    { productName: "Abobora", pricePerKg: 5, kg: 1 },
    { productName: "Pepino", pricePerKg: 3.55, kg: 1.3 },
    { productName: "Limão", pricePerKg: 1.2, kg: 2 },
    { productName: "Abacate", pricePerKg: 5.4, kg: 1.67 },
    { productName: "Morango", pricePerKg: 11.9, kg: 3 }
]

const finalValue = cart.reduce((accumulator, currentValue) =>{
    const finalValueProduct = currentValue.pricePerKg * currentValue.kg
    return accumulator + finalValueProduct
}, 0)

console.log(`Valor total da compra R$ ${finalValue.toFixed(2)}`);

