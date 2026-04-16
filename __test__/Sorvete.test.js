import Sorvete from '../models/Sorvete.js'
 
describe('Classe Sorvete', () => {
 
    test('Deve guardar o peso e a densidade corretamente', () => {
        const sorvete = new Sorvete(400)
        expect(sorvete.peso).toBe(400)
        expect(sorvete.densidade).toBe(0.6)
    })
 
    test('Deve definir altura 15 para pote de 400g', () => {
        const sorvete = new Sorvete(400)
        expect(sorvete.altura).toBe(15)
    })
 
    test('Deve definir altura 17 para pote de 900g', () => {
        const sorvete = new Sorvete(900)
        expect(sorvete.altura).toBe(17)
    })
 
    test('Deve definir altura 20 para pote de 1700g', () => {
        const sorvete = new Sorvete(1700)
        expect(sorvete.altura).toBe(20)
    })
 
    test('calcularVolume deve retornar peso / densidade', () => {
        const sorvete = new Sorvete(900)
        // 900 / 0.6 = 1500
        expect(sorvete.calcularVolume()).toBeCloseTo(1500, 2)
    })
})