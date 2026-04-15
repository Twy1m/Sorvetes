import Custo from '../models/Custo.js'

describe('Testes da Regra de Negócio: Classe Financeira (Custo)', () => {
    test('Deve iniciar com os preços padrão corretamente', () => {
        // 1. PREPARAR E AGIR
        const custoPadrao = new Custo()
        // 2. VALIDAR
        expect(custoPadrao.leite).toBe(4.50)
        expect(custoPadrao.caldaChocolate).toBe(25.00)
    })

    test('Deve calcular o custo dos ingredientes (conversão de g/ml para Kg/L)', () => {
        // 1. PREPARAR
        const custo = new Custo()

        // Criando um "Mock" com valores redondos para facilitar a matemática
        // Ex: 100.000ml = 100L. Como o leite custa 4.50, tem que dar R$ 450.00
        const ingredientesMock = {
            leite: 100000,         // 100 L
            creme: 50000,          // 50 L
            acucar: 20000,         // 20 kg
            sucoMaracuja: 10000,   // 10 L
            caldaChocolate: 4000   // 4 L
        }
        // 2. AGIR
        const precosCalculados = custo.calcularCusto(ingredientesMock)
        // 3. VALIDAR
        expect(precosCalculados.leite).toBe(450)           // 100L * 4.50
        expect(precosCalculados.creme).toBe(1100)          // 50L * 22.00
        expect(precosCalculados.acucar).toBe(97.80)        // 20kg * 4.89
        expect(precosCalculados.sucoMaracuja).toBe(150)    // 10L * 15.00
        expect(precosCalculados.caldaChocolate).toBe(100)  // 4L * 25.00
    })

    test('Deve somar o custo total da produção', () => {
        // 1. PREPARAR
        const custo = new Custo()
        const ingredientesMock = {
            leite: 100000, creme: 50000, acucar: 20000,
            sucoMaracuja: 10000, caldaChocolate: 4000
        }
        // 2. AGIR
        custo.calcularCusto(ingredientesMock) // O total é somado lá dentro!
        // 3. VALIDAR
        // A soma exata deve ser: 450 + 1100 + 97.80 + 150 + 100 = 1897.80
        expect(custo.totalCusto).toBe(1897.80)
    })

    test('Deve calcular o custo por pote (Custo unitário)', () => {
        // 1. PREPARAR
        const custo = new Custo()
        const ingredientesMock = {
            leite: 100000, creme: 50000, acucar: 20000,
            sucoMaracuja: 10000, caldaChocolate: 4000
        }
        custo.calcularCusto(ingredientesMock) // totalCusto = 1897.80
        // 2. AGIR: 771 potes gerados (valor vindo do teste de Receita)
        const custoPorPote = custo.calcularCustoPorPote(771)
        // 3. VALIDAR: 1897.80 / 771 = 2.46...
        expect(custoPorPote).toBe(2.46)
    })

    test('Deve permitir calcular custos com preços dinâmicos (Inflação)', () => {
        // PREPARAR: O mercado subiu! Novo leite a R$ 9.00 e calda a R$ 50.00
        // Parâmetros: leite, creme, acucar, sucoMaracuja, caldaChocolate
        const custoInflacao = new Custo(9.00, 22.00, 4.89, 15.00, 50.00)

        const ingredientesMock = {
            leite: 100000,    // 100 L
            creme: 0, acucar: 0, sucoMaracuja: 0, // zerando o resto
            caldaChocolate: 4000 // 4 L
        }
        // AGIR
        const precos = custoInflacao.calcularCusto(ingredientesMock)
        // VALIDAR
        expect(precos.leite).toBe(900)           // 100L * R$ 9,00
        expect(precos.caldaChocolate).toBe(200)  // 4L * R$ 50,00
        expect(custoInflacao.totalCusto).toBe(1100) // 900 + 200
    })
})