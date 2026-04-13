export default class Custo {
    // Valores em R$ por kg ou por Litro
    constructor(leite = 4.50, creme = 22.00, acucar = 4.89, sucoMaracuja = 15.00, caldaChocolate = 25.00) {
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.sucoMaracuja = sucoMaracuja
        this.caldaChocolate = caldaChocolate
        // atributo do resultado dos cálculos
        this.preco = {}
        this.totalCusto = 0
    }

    // Recebe o objeto qtdeIngredientes (que já passou pelas regras da Receita)
    calcularCusto(qtdeIngredientes) {
        // Multiplicamos a qtde (gramas/ml / 1000 = kg/L) pelo preço
        this.preco = {
            leite: Number(((qtdeIngredientes.leite / 1000) * this.leite).toFixed(2)),
            creme: Number(((qtdeIngredientes.creme / 1000) * this.creme).toFixed(2)),
            acucar: Number(((qtdeIngredientes.acucar / 1000) * this.acucar).toFixed(2)),
            sucoMaracuja: Number(((qtdeIngredientes.sucoMaracuja / 1000) * this.sucoMaracuja).toFixed(2)),
            caldaChocolate: Number(((qtdeIngredientes.caldaChocolate / 1000) * this.caldaChocolate).toFixed(2))
        }
        this.somarTotalCusto()
        return this.preco
    }

    somarTotalCusto() {
        // Soma os valores já formatados
        const somaBruta = this.preco.leite + this.preco.creme + this.preco.acucar +
                          this.preco.sucoMaracuja + this.preco.caldaChocolate
        this.totalCusto = Number(somaBruta.toFixed(2))
    }

    calcularCustoPorPote(totalSorvete) {
        if (!totalSorvete || totalSorvete <= 0) return 0
        return Number((this.totalCusto / totalSorvete).toFixed(2))
    }
}