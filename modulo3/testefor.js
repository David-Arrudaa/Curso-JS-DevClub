const p = document.querySelector("p")
const input = document.querySelector("input")
const button = document.querySelector("button")

const contacts = [
    { name: "David", number: "(15)99682-0177" },
    { name: "Rafaela", number: "(15)99612-0177" },
    { name: "Joana", number: "(15)99682-3477" },
    { name: "Pedro", number: "(15)99682-0112" }
]


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

