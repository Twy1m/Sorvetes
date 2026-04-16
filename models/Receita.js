export default class Receita {
  constructor(
    leite = 450,
    creme = 180,
    acucar = 110,
    sucoMaracuja = 120,
    caldaChocolate = 50,
  ) {
    this.leite = leite;
    this.creme = creme;
    this.acucar = acucar;
    this.sucoMaracuja = sucoMaracuja;
    this.caldaChocolate = caldaChocolate;

    this.pesoBase = leite + creme + acucar + sucoMaracuja + caldaChocolate;

    this.receita = {};
    this.totalSorvetes = 0;
  }

  calcularQtdeIngredientes() {
    const fator = 1000000 / this.pesoBase;

    this.receita = {
      leite: Number((this.leite * fator).toFixed(2)),
      creme: Number((this.creme * fator).toFixed(2)),
      acucar: Number((this.acucar * fator).toFixed(2)),
      sucoMaracuja: Number((this.sucoMaracuja * fator).toFixed(2)),
      caldaChocolate: Number((this.caldaChocolate * fator).toFixed(2)),
    };

    return this.receita;
  }

  calcularQtdeSorvetes(pesoUnitario) {
    if (!pesoUnitario || pesoUnitario <= 0) return 0;
    this.totalSorvetes = Math.floor(1000000 / pesoUnitario);
    return this.totalSorvetes;
  }
}