export default class Receita {
    // Todos os ingredientes devem ser definidos nos parâmetros do construtor
    constructor(
        leiteIntegral = 200, 
        leiteCondensado = 134, 
        cremeDeLeite = 100, 
        polpadeMaracuja = 50, 
        ligaNeutra = 3.5, 
        emulsificante = 5, 
        chocolateMeioAmargo = 20
    ) {
        // Atribuição correta aos atributos da classe
        this.leiteIntegral = leiteIntegral;
        this.leiteCondensado = leiteCondensado;
        this.cremeDeLeite = cremeDeLeite;
        this.polpadeMaracuja = polpadeMaracuja;
        this.ligaNeutra = ligaNeutra;
        this.emulsificante = emulsificante;
        this.chocolateMeioAmargo = chocolateMeioAmargo;

        // Cálculo do peso base somando os atributos
        this.pesoBase = this.leiteIntegral + this.leiteCondensado + this.cremeDeLeite + 
                        this.polpadeMaracuja + this.ligaNeutra + this.emulsificante + 
                        this.chocolateMeioAmargo;

        // Atributos para armazenar resultados
        this.receita = {};
        this.totalSorvetes = 0;
    }

    // Calcula quanto de cada ingrediente é necessário para 1.000.000g (1 Tonelada)
    calcularQtdeIngredientes() {
        const fatorEscala = 1000000 / this.pesoBase;

        this.receita = {
            leiteIntegral: this.leiteIntegral * fatorEscala,
            leiteCondensado: this.leiteCondensado * fatorEscala,
            cremeDeLeite: this.cremeDeLeite * fatorEscala,
            polpadeMaracuja: this.polpadeMaracuja * fatorEscala,
            ligaNeutra: this.ligaNeutra * fatorEscala,
            emulsificante: this.emulsificante * fatorEscala,
            chocolateMeioAmargo: this.chocolateMeioAmargo * fatorEscala
        };

        return this.receita;
    }

    // Calcula quantos sorvetes (potes/unidades) saem de 1 Tonelada de massa
    calcularQtdeSorvetes(pesoUnitario) {
        if (pesoUnitario <= 0) return 0;
        
        this.totalSorvetes = 1000000 / pesoUnitario;
        this.verificarQtdeInteira();

        return this.totalSorvetes;
    }

    verificarQtdeInteira() {
        // Garante que não teremos "meio" sorvete no resultado final
        this.totalSorvetes = Math.floor(this.totalSorvetes);
    }
}