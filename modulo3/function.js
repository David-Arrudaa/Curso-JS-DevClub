/* 
    Functions / Funções
        Trecho de código que é executado
        SOMENTE quando é solicitado 

        Funçoes podem ser VOID(vazia) ou podem ter um RETURN(retorno)
    */

// function nome (name = "Nome inválido"){
//     console.log(name);
// }

// nome()

// function sum(value, value2) {
//     return value + value2
// }

// const result = sum(10, 20)
// console.log(result + " Resultado");

//-----------------------------------------------------------------
//Calcular Desconto:
// Todos os produtos acima de R%30,00 tem desconto de 10%.


const cart = [10, 244, 99, 2, 20, 33, 250]

let total = 0
cart.forEach(element => {
    total += element
});

let finalValue = 0
function calculateDiscount(price, discount) {
    return (price * discount) / 100
}

cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue += (value - discount)
    } else {
        finalValue += value
    }
});

console.log(`O valor total sem desconto é: R$ ${total.toFixed(2)}`);
console.log(`O valor final com desconto é: R$ ${finalValue.toFixed(2)}`);
console.log(`Economia total é: R$ ${(total - finalValue).toFixed(2)}`);




