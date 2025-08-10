/* 
    THIS 
     
    this em ingles significa => este, esta, isto...
    
    No javaScript, o this faz referencia:

    Node => module.exports
    Web => window

    Escopo:
     => Global -> Quando começamos a escrever nossa aplicaçao.
        No contexto global, o this faz referencia ao objeto global,
        que é o objeto window no navegador de internet ou ao global no Node.js.

     => Local -> Por exemplo, dentro de uma função.
*/

console.log(this === module.exports);
