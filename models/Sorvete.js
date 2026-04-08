export default class Sorvetes {
    constructor(raio, altura, densidade) {
        this.raio = raio;
        this.altura = altura;
        this.densidade = densidade; 
    }
    
    calcularVolume() {
        // Volume do cilindro: PI * r² * h
        return Math.PI * Math.pow(this.raio, 2) * this.altura;
    }

    conversaoMassa() {
        // Massa = Volume * Densidade
        return this.calcularVolume() * this.densidade;
    }
}