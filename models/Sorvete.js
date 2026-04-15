export default class Sorvetes{
    constructor(peso){
        this.peso = peso; // salva o peso do pote
        this.densidade = 0.6; // RN01

        // ALTERADO: altura fixa baseada no peso
        if (peso === 400) this.altura = 15;
        else if (peso === 900) this.altura = 17;
        else if (peso === 1700) this.altura = 20;
    }

    calcularVolume(){
        return this.peso / this.densidade;
    }

    calcularRaio(){
        //Alterei a formula pra encaixar melhor
        return Math.sqrt(this.calcularRaio() / (Math.PI * this.altura));
        
    }

    conversaoMassa(){
        return this.calcularRaio() * this.densidade
    }
}   
