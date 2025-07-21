/* 
    ALTERANDO E ACESSANDO TEXTOS:

        textContent -> Pega todo o conteudo
        innerText -> Pega APENAS o texto
        innerHTML -> Permite adicionar HTML e texto
*/

const element = document.querySelector(".paragraph-js")

console.log(element.textContent); // SÓ HTML
console.log(element.innerText); // LEVA EM CONTA O CSS -> TRÁS O QUE É VISIVEL NA TELA
console.log(element.innerHTML); // TRÁS TUDO DENTRO -> PERMITE ADICIONAR HTML

