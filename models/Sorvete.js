export default class Sorvete {
    constructor(diametro, altura) {
        this.raio = diametro / 2
        this.altura = altura
        this.densidade = 1.10 // densidade do sorvete em g/cm³
    }

    calcularAreaBase() {
        let area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume() {
        let volume = this.altura * this.calcularAreaBase()
        return volume
    }

    // relacionamento entre volume e a densidade, independente do tamanho do pote
    // regra de negócio da densidade constante do sorvete em 1,10 g/cm³
    getPesoUnitario() {
        return this.calcularVolume() * this.densidade
    }
}