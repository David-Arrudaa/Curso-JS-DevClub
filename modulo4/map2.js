/* 
    O método MAP serve para mapear um array

    O Map aceita até 3 parametros

    const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx)

    1) O Map vai passar por todos os itens do array, e o primeiro parametro é cada item,
     um por vez do array qye estamos mapeando. Item OBRIGATORIO
    2) O indice é a posiçao atual que estamos mapeando. Item OPCIONAL
    3) Uma cópia do array original. Item Opcional
*/

// const list = [
//     { name: "David", vip: true },
//     { name: "Rodolfo", vip: false },
//     { name: "Rafaela", vip: true },
//     { name: "João", vip: false },
//     { name: "Bruno", vip: true },
//     { name: "Ana", vip: false },
//     { name: "Julia", vip: true }
// ]

// const newList = list.map((user) => {
//     return {
//         name: user.name,
//         braceletColor: user.vip ? "Black" : "Green"
//     }
// });

// console.log(list);
// console.log(newList);

//---------------------------------------------------

const students = [
    { name: "David", testGrade: 7 },
    { name: "Rodolfo", testGrade: 5 },
    { name: "Rafaela", testGrade: 8 },
    { name: "João", testGrade: 9 },
    { name: "Bruno", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julia", testGrade: 10 }
]

const approvedStudants = students.map(users => {
    return {
        name: users.name,
        finalGrade: users.testGrade >= 5 ? "Approved" : "Failed",
    }
})

console.log(approvedStudants);



