
export default class Custo {
    // Valores em R$ por kg ou por Litro (ex: leite R$ 5.50/L)
    constructor(
        leiteIntegral = 5.50, 
        leiteCondensado = 18.00, 
        cremeDeLeite = 22.00, 
        polpadeMaracuja = 35.00, 
        ligaNeutra = 45.00, 
        emulsificante = 38.00, 
        chocolateMeioAmargo = 55.00
    ) {
        this.leiteIntegral = leiteIntegral;
        this.leiteCondensado = leiteCondensado;
        this.cremeDeLeite = cremeDeLeite;
        this.polpadeMaracuja = polpadeMaracuja;
        this.ligaNeutra = ligaNeutra;
        this.emulsificante = emulsificante;
        this.chocolateMeioAmargo = chocolateMeioAmargo;

        // Atributos do resultado dos cálculos
        this.precoIngredientes = {};
        this.totalCusto = 0;
    }

    // Recebe o objeto qtdeIngredientes calculado pela classe Receita
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
        // Soma todos os valores do objeto de preços
        const valores = Object.values(this.precoIngredientes);
        const somaBruta = valores.reduce((acumulador, valor) => acumulador + valor, 0);
        
        this.totalCusto = Number(somaBruta.toFixed(2));
    }
}