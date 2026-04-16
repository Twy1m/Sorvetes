import Custo from '../models/Custo.js'
 
describe('Classe Custo', () => {
 
    test('Deve inicializar com os preços padrão corretamente', () => {
        const custo = new Custo()
        expect(custo.leite).toBe(4.50)
        expect(custo.creme).toBe(22.00)
        expect(custo.acucar).toBe(4.89)
        expect(custo.sucoMaracuja).toBe(15.00)
        expect(custo.caldaChocolate).toBe(25.00)
    })
 
    test('Deve inicializar com preços personalizados', () => {
        const custo = new Custo(9.00, 30.00, 6.00, 20.00, 50.00)
        expect(custo.leite).toBe(9.00)
        expect(custo.caldaChocolate).toBe(50.00)
    })
 
    test('Deve inicializar totalCusto como 0', () => {
        const custo = new Custo()
        expect(custo.totalCusto).toBe(0)
    })
 
    test('calcularCustoPorPote deve retornar 0 para totalSorvete inválido', () => {
        const custo = new Custo()
        expect(custo.calcularCustoPorPote(0)).toBe(0)
        expect(custo.calcularCustoPorPote(-1)).toBe(0)
    })
})
 