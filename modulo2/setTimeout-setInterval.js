/* 
    setTimeout -> Executa uma vez

    setInterval - > Executa infinitas vezes
        clearInterval -> Vai pausar o setInterval
 
*/

// setTimeout(() => {
//     alert("Executei")
// }, 1000);


// setTimeout(function () {
//     alert("Executei")
// }, 3000); // 10000 tempo em milesegundos => 1 segundo


// function myfunction(){
//     // executa o que estiver aqui
// }
// setTimeout(myfunction, timeout);

// setInterval(() => {
//     console.log(number++);  
// }, 1000);

let h1 = document.querySelector("h1")
let number = 0
let cron

function start(){
    cron = setInterval(function(){
        number++
        h1.innerHTML = number
    }, 1000)
}

function stop1(){
    clearInterval(cron)
}
