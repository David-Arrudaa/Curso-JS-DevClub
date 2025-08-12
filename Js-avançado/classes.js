// const person = {
//     name: "David",
//     age: 32,
//     talk: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

class Person {
    name;
    age;


constructor(name, age){  
    this.name = name,
    this.age = age
}

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years rs old!`);  
    }
}


const newPerson1 = new Person("Rafaela", 28)
newPerson1.talk()