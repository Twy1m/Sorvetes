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
        // Dividimos a qtde (gramas) por 1000 para obter quilos/litros e multiplicamos pelo preço
        this.precoIngredientes = {
            leiteIntegral: Number(((qtdeIngredientes.leiteIntegral / 1000) * this.leiteIntegral).toFixed(2)),
            leiteCondensado: Number(((qtdeIngredientes.leiteCondensado / 1000) * this.leiteCondensado).toFixed(2)),
            cremeDeLeite: Number(((qtdeIngredientes.cremeDeLeite / 1000) * this.cremeDeLeite).toFixed(2)),
            polpadeMaracuja: Number(((qtdeIngredientes.polpadeMaracuja / 1000) * this.polpadeMaracuja).toFixed(2)),
            ligaNeutra: Number(((qtdeIngredientes.ligaNeutra / 1000) * this.ligaNeutra).toFixed(2)),
            emulsificante: Number(((qtdeIngredientes.emulsificante / 1000) * this.emulsificante).toFixed(2)),
            chocolateMeioAmargo: Number(((qtdeIngredientes.chocolateMeioAmargo / 1000) * this.chocolateMeioAmargo).toFixed(2))
        };

        this.somarTotalCusto();

        return this.precoIngredientes;
    }

    somarTotalCusto() {
        const valores = Object.values(this.precoIngredientes);
        const somaBruta = valores.reduce((acumulador, valor) => acumulador + valor, 0);
        
        this.totalCusto = Number(somaBruta.toFixed(2));
    }

    calcularCustoPorPote(totalSorvete) {
        if (!totalSorvete || totalSorvete <= 0) return 0
        return Number((this.totalCusto / totalSorvete).toFixed(2))
    }
}