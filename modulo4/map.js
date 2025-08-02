/* 
    MAP => Mapear um array
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array, com a mesma quantidade de itens do array original
        - Aceita 3 parametros
            - item do array
            - indes
            - array completo

    Map anda item por item no array original, e posso criar um novo arrya com a mesma quantidade de itens,
    podendo receber dentro desse array as mudanças que quisermos 
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map(item => item * 2)

console.log(double);