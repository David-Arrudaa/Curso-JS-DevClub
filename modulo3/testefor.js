const p = document.querySelector("p")
const input = document.querySelector("input")
const button = document.querySelector("button")

const contacts = [
    { name: "David", number: "(15)99682-0177" },
    { name: "Rafaela", number: "(15)99612-0177" },
    { name: "Joana", number: "(15)99682-3477" },
    { name: "Pedro", number: "(15)99682-0112" }
]

//feito com for
function search() {
    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()) {
            p.innerHTML = `Contato Encontrado: Nome: ${contacts[i].name}, Tel: ${contacts[i].number}`
            break
        } else {
            p.innerHTML = "Contato não encontrado!"
        }
    }
}

//feito com for-of
// function search() {
//     for (const contact of contacts) {
//         if (input.value.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
//             p.innerHTML = `Contato Encontrado: Nome: ${contact.name}, Tel: ${contact.number}`
//             break
//         } else {
//             p.innerHTML = "Contato não encontrado!"
//         }
//     }
// }

// feito com while
// function search() {
//     let i = 0

//     while (i < contacts.length) {
//         if (input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()) {
//             p.innerHTML = `Contato Encontrado: Nome: ${contacts[i].name}, Tel: ${contacts[i].number}`
//             break
//         } else {
//             p.innerHTML = "Contato não encontrado!"
//         }
//         i++
//     }
// }
