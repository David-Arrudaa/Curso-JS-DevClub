/* 
    Estrutura de repetição - LOOP
        - FOR OF - serve para iterar com objetos
*/

const users = { name: "David", age: 32, street: "Rua 12" }

// users.name   como acessar a key
// users["name"]


for (const key in users) {
    console.log(`${key} : ${users[key]}`); 
}
