//MODULO DE JAVASCRIPT QUE HAGA USO DE LAS FUNCIONALIDADES DE ECMASript 6

//ARROW FUNCTION

//Nueva estructura de clases ECMAScript 6

//Template Strings

//Let y Const

//Declaration of funcion in ES6 with arrows
let says = "say"
const saysFunction = argument => `${argument}s`;
saysFunction(says);

export default class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    /*In ES5 the methods of the class are coded like this:
    Cat.prototype.sayHello = function () {
        console.log('hi');
    }*/

    //In ES6
    sayHello(){
        alert(`Hi ${this.name}`);
    }
    saySomthing(somthing){
        alert(`${this.name} ${saysFunction(says)} ${somthing}`);
    }
};