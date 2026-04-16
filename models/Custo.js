export default class Custo {
    // Valores em R$ por kg ou por Litro
    constructor(
        leite = 4.50,
        creme = 22.00,
        acucar = 4.89,
        sucoMaracuja = 15.00,
        caldaChocolate = 25.00
    ) {
        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.sucoMaracuja = sucoMaracuja
        this.caldaChocolate = caldaChocolate

        this.precoIngredientes = {}
        this.totalCusto = 0
    }

    calcularCusto(qtdeIngredientes) {
        this.precoIngredientes = {
            leite:          Number(((qtdeIngredientes.leite / 1000) * this.leite).toFixed(2)),
            creme:          Number(((qtdeIngredientes.creme / 1000) * this.creme).toFixed(2)),
            acucar:         Number(((qtdeIngredientes.acucar / 1000) * this.acucar).toFixed(2)),
            sucoMaracuja:   Number(((qtdeIngredientes.sucoMaracuja / 1000) * this.sucoMaracuja).toFixed(2)),
            caldaChocolate: Number(((qtdeIngredientes.caldaChocolate / 1000) * this.caldaChocolate).toFixed(2))
        }

        this.somarTotalCusto()

        return this.precoIngredientes
    }

    somarTotalCusto() {
        const valores = Object.values(this.precoIngredientes)
        const somaBruta = valores.reduce((acc, val) => acc + val, 0)
        this.totalCusto = Number(somaBruta.toFixed(2))
    }

    calcularCustoPorPote(totalSorvetes) {
        if (!totalSorvetes || totalSorvetes <= 0) return 0
        return Number((this.totalCusto / totalSorvetes).toFixed(2))
    }
}