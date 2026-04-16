import Receita from '../models/Receita.js'
 
describe('Classe Receita', () => {
 
    test('Deve calcular o pesoBase corretamente com valores padrão', () => {
        const receita = new Receita()
        // 200 + 134 + 100 + 50 + 3.5 + 5 + 20 = 512.5
        expect(receita.pesoBase).toBe(512.5)
    })
 
    test('Deve calcular o pesoBase com valores personalizados', () => {
        const receita = new Receita(300, 200, 150, 80, 5, 10, 30)
        // 300+200+150+80+5+10+30 = 775
        expect(receita.pesoBase).toBe(775)
    })
 
    test('calcularQtdeIngredientes deve escalar para 1 tonelada', () => {
        const receita = new Receita()
        const resultado = receita.calcularQtdeIngredientes()
        const fator = 1000000 / 512.5
 
        expect(resultado.leiteIntegral).toBeCloseTo(200 * fator, 2)
        expect(resultado.leiteCondensado).toBeCloseTo(134 * fator, 2)
        expect(resultado.cremeDeLeite).toBeCloseTo(100 * fator, 2)
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