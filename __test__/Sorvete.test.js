import Sorvete from '../models/Sorvete.js'

describe('Testes da Regra de Negócio: Classe Sorvete', () => {
    test('Deve calcular a área da base corretamente', () => {
        // 1. PREPARAR: Pote com diâmetro 10cm → raio 5cm
        const sorvete = new Sorvete(10, 15)
        // 2. AGIR
        const area = sorvete.calcularAreaBase()
        // 3. VALIDAR: PI * 5² = 78.5398...
        expect(area).toBeCloseTo(78.5398, 2)
    })

    test('Deve calcular o volume do pote corretamente', () => {
        // 1. PREPARAR: Pote com diâmetro 10cm e altura 15cm
        const sorvete = new Sorvete(10, 15)
        // 2. AGIR
        const volume = sorvete.calcularVolume()
        // 3. VALIDAR: 15 * PI * 5² = 1178.097...
        expect(volume).toBeCloseTo(1178.097, 2)
    })

    test('Deve calcular o peso unitário do pote (volume * densidade)', () => {
        // 1. PREPARAR: Pote com diâmetro 10cm e altura 15cm, densidade 1.10 g/cm³
        const sorvete = new Sorvete(10, 15)
        // 2. AGIR
        const peso = sorvete.getPesoUnitario()
        // 3. VALIDAR: 1178.097 * 1.10 = 1295.906...
        expect(peso).toBeCloseTo(1295.906, 2)
    })
})