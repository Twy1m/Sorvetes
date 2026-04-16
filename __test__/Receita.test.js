import Receita from '../models/Receita.js'
 
describe('Classe Receita', () => {
 
    test('Deve calcular o pesoBase corretamente com valores padrão', () => {
        const receita = new Receita()
        // 450 + 180 + 110 + 120 + 50 = 910
        expect(receita.pesoBase).toBe(910)
    })
 
    test('Deve calcular o pesoBase com valores personalizados', () => {
        const receita = new Receita(500, 200, 150, 100, 50)
        // 500+200+150+100+50 = 1000
        expect(receita.pesoBase).toBe(1000)
    })
 
    test('calcularQtdeIngredientes deve escalar para 1 tonelada', () => {
        const receita = new Receita()
        const resultado = receita.calcularQtdeIngredientes()
        const fator = 1000000 / 910
 
        expect(resultado.leite).toBeCloseTo(450 * fator, 2)
        expect(resultado.creme).toBeCloseTo(180 * fator, 2)
        expect(resultado.acucar).toBeCloseTo(110 * fator, 2)
        expect(resultado.sucoMaracuja).toBeCloseTo(120 * fator, 2)
        expect(resultado.caldaChocolate).toBeCloseTo(50 * fator, 2)
    })
 
    test('calcularQtdeSorvetes deve retornar quantidade inteira (Math.floor)', () => {
        const receita = new Receita()
        // 1.000.000 / 900 = 1111.11... → 1111
        expect(receita.calcularQtdeSorvetes(900)).toBe(1111)
    })
 
    test('calcularQtdeSorvetes deve retornar 0 para peso inválido', () => {
        const receita = new Receita()
        expect(receita.calcularQtdeSorvetes(0)).toBe(0)
    })
 
    test('calcularQtdeSorvetes deve armazenar o resultado em totalSorvetes', () => {
        const receita = new Receita()
        receita.calcularQtdeSorvetes(400)
        expect(receita.totalSorvetes).toBe(2500)
    })
})