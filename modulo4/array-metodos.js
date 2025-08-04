/* 
    Array's
        - push -> Adiciona mais um item ao array
        - lenght -> Mostra o tamanho do array
        - sort -> Organiza o array
        - delete -> Deleta o item de uma posição do Array
        - every -> Esse metodo testa se todos os elementos do array passam em uma condição.
        - some -> o .some() faz algo parecido com o .every(), A diferença é que o .every() 
        - fill -> Preenche posições do array como desejarmos 
        - fing -> Usamos esse metodo quando queremos encontrar algum elemento dentro no array
        - findIndex -> Faz o mesmo que o .find mas retorna o indice do elemento encontrato
        - concat()->

*/

// const myArray = [2, 1, 3]
// myArray.push(4) // Adiciona um item ao array
// console.log(myArray);

// console.log(myArray.length); // Diz a contidade de itens no array
// myArray.sort()// Organiza a ordem dentro do array
// console.log(myArray); 

// delete myArray[0] // deleta o elemento na posição passada, mas mantem ele vazia

// console.log(myArray.length);

// const user = [
//     { name : "Nico", credit: 600},
//     { name : "Maria", credit: 900},
//     { name : "Joana", credit: 300},
//     { name : "Vanessa", credit: 200}
// ]
// const isTrue = user.every( user => user.credit > 100) // Precisa que todos os user sejam true para retornar TRUE
// console.log(isTrue);

// const isTrue2 = user.some( user => user.credit > 500) // Precisa que apenas um user sejam true para retornar TRUE
// console.log(isTrue);

// const number = [1, 2, 3, 4] // Altera o valor do itens, passando primeiro o novo valor, posição de inicio e posição de fim
// number.fill(0, 0, 2)
// console.log(number);

// const users = [
//     { name : "Nico", credit: 600},
//     { name : "Maria", credit: 900},
//     { name : "Joana", credit: 300},
//     { name : "Vanessa", credit: 200}
// ]

// const findAUsers = users.find( user => user.credit === 600) // Busca dentro do array a informação solicitada
// console.log(findAUsers);

// const findAUsers1 = users.findIndex( user => user.credit === 600) // Busca dentro do array a posição da informação solicitada
// console.log(findAUsers1);

// const array1 = ["a", "b", "c"]
// const array2 = ["d", "e", "f"]
// const numbers1 = [1, 3, 5]
// const numbers2 = [2, 4, 6]

// const array3 = array1.concat(array2)
// console.log(array3);

// const numbers3 = numbers1.concat(numbers2)
// console.log(numbers3);

// const elements = ["Fire", "Air", "Water"]

// // const myElements = elements.join(" ")
// // console.log(myElements);

// elements.pop() // Apaga o ultimo item do array
// console.log(elements);

// elements.shift() // Apaga o primeiro item do array
// console.log(elements);

// const names = ["Joao", "Maria", "Pedro", "Michele", "Fernando"]

// const newNames = names.slice(3) // Pega os itens escolhidos atraves do index e salva em outro local
// console.log(newNames);

const months = ["Jan", "Fev", "Mar", "Abr", "Mai"] // Altera o valor de um item do array, passando index, qnts elementos e novo valor

months.splice(0, 5, "Feb")
console.log(months);





