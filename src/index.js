class calculator{
    constructor(){
        this.valorA=0;
        this.valorB=2;
    }
    suma(valor1,valor2){
        this.valorA = valor1;
        this.valorB = valor2;
        return this.valorA + this.valorB;
    }
}
const calculadora = new calculator;

document.write(calculadora.suma(2,4))