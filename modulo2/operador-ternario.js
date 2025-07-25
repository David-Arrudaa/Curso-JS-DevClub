/* 
Operadores Ternarios

    ? if(se)
    : else(se não)
    && (if sem else)

*/

const salary = 11000


// if (salary < 3000) {
//     console.log("O colaborador é Junior");
// } else if (salary >= 3000 && salary < 10000) {
//     console.log("O colaborador é Pleno");
// } else {
//     console.log("O colaborador é Senior");
// }


// If e Else
// salary < 3000 ? console.log("O colaborador é Junior") : console.log("O operador é Senior"); if  e else


// Apenas If
// salary <= 3000 && console.log("O colaborador é Junior")


//com Else If
salary < 3000 ? console.log("O operador é Junior") : salary >=3000 && salary < 10000 ? console.log("O operador é Pleno") : console.log("O operador é Senior");
