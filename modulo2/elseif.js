/* 
    IF(SE)
    Else (Se não)
    Else If para adicionar nova verificaçao

*/

const temperature = 41

if (temperature === 36) {
    console.log("Voce está saudável");
} else if (temperature > 36 && temperature <= 40) {
    console.log("Voce está com febre")
} else if (temperature > 40) {
    console.log("Voce está com muita febre")
} else {
    console.log("Voce está com hipotermia");
}