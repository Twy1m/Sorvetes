export default class Receita {
    constructor(
        leiteIntegral = 200, 
        leiteCondensado = 134, 
        cremeDeLeite = 100, 
        polpadeMaracuja = 50, 
        ligaNeutra = 3.5, 
        emulsificante = 5, 
        chocolateMeioAmargo = 20
    ) {
        this.leiteIntegral = leiteIntegral;
        this.leiteCondensado = leiteCondensado;
        this.cremeDeLeite = cremeDeLeite;
        this.polpadeMaracuja = polpadeMaracuja;
        this.ligaNeutra = ligaNeutra;
        this.emulsificante = emulsificante;
        this.chocolateMeioAmargo = chocolateMeioAmargo;

        this.pesoBase = this.leiteIntegral + this.leiteCondensado + this.cremeDeLeite + 
                        this.polpadeMaracuja + this.ligaNeutra + this.emulsificante + 
                        this.chocolateMeioAmargo;

        this.receita = {};
        this.totalSorvetes = 0;
    }

    calcularQtdeIngredientes() {
        const fatorEscala = 1000000 / this.pesoBase; // Escala para 1 Tonelada

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

    calcularQtdeSorvetes(pesoUnitario) {
        if (pesoUnitario <= 0) return 0;
        this.totalSorvetes = Math.floor(1000000 / pesoUnitario);
        return this.totalSorvetes;
    }
}