/* 
    ForEach(item, index, array)

*/

const users = [
    { name: "David", age: 32, contact: "(15)99682-0177" },
    { name: "Rafaela", age: 28, contact: "(15)99612-0177" },
    { name: "Joana", age: 31, contact: "(15)99682-3477" },
    { name: "Pedro", age: 23, contact: "(15)99682-0112" }
]

users.forEach((element, index)=> {
    console.log(`${index + 1}) Nome: ${element.name}, Idade: ${element.age}, Contato: ${element.contact}`);

});