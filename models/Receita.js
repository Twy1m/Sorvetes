export default class Receita {
    // valores padrão em gramas/ml
    constructor(leite = 500, creme = 300, acucar = 150, sucoMaracuja = 100, caldaChocolate = 50) {
        this.leite = leite,
        this.creme = creme,
        this.acucar = acucar,
        this.sucoMaracuja = sucoMaracuja,
        this.caldaChocolate = caldaChocolate,
        // peso base da receita
        this.pesoBase = this.leite + this.creme + this.acucar +
                        this.sucoMaracuja + this.caldaChocolate
        // atributo do resultado dos cálculos
        this.receita = {}
        this.totalSorvete = 0
    }

    // referência 1 Tonelada ou 1.000.000 de gramas
    calcularQtdeIngredientes() {
        const fatorEscala = 1000000 / this.pesoBase
        this.receita = {
            leite: Number((this.leite * fatorEscala).toFixed(2)),
            creme: Number((this.creme * fatorEscala).toFixed(2)),
            acucar: Number((this.acucar * fatorEscala).toFixed(2)),
            sucoMaracuja: Number((this.sucoMaracuja * fatorEscala).toFixed(2)),
            caldaChocolate: Number((this.caldaChocolate * fatorEscala).toFixed(2))
        }
        return this.receita
    }

    // Recebe o peso unitário do programa principal
    calcularQtdeSorvete(pesoUnitario) {
        this.totalSorvete = 1000000 / pesoUnitario
        this.verificarQtdeSorvete()
        return this.totalSorvete
    }

    verificarQtdeSorvete() {
        // regra de negócio: apenas potes de sorvete inteiros
        this.totalSorvete = Math.floor(this.totalSorvete)
    }
}