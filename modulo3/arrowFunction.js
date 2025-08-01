/* 
    Functions / Funções

    function padrão -> function() {}
    arrow function -> () {}

    Não escrevemos "function"
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
*/

function sayMyName(name) {
    return `Seu nome é ${name}`
}
console.log(sayMyName("David"));

const seyMyName2 = (name) => `Seu nome é ${name}`
console.log(seyMyName2("Arruda"));

