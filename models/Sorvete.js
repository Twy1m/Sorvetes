export default class Sorvetes{
    constructor(raio,altura,densidade){
        this.raio = raio
        this.altura = altura
        this.densidade = densidade 
    }
    
    calcularVolume(){
        return Math.PI * (this.raio * this.raio) * this.altura
    }
    conversaoMassa(){
        return this.calcularVolume() * this.densidade
    }
    }   

