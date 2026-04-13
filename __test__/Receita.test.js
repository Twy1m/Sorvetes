import Receita from '../models/Receita.js'

describe('Testes da Regra de Negócio: Classe Receita', () => {
    test('Deve calcular a proporção de ingredientes para 1 Tonelada com receita padrão', () => {
        // 1. PREPARAR: Criar uma receita sem passar valores (vai usar o padrão do construtor)
        const receitaPadrao = new Receita()
        // 2. AGIR
        const proporcao = receitaPadrao.calcularQtdeIngredientes()
        // 3. VALIDAR:
        // A) Validando se a soma do peso base padrão está correta (500+300+150+100+50)
        expect(receitaPadrao.pesoBase).toBe(1100)
        // B) Validando o Leite: 500 * (1.000.000 / 1100) = 454545.454... toFixed(2) = 454545.45
        expect(proporcao.leite).toBe(454545.45)
        // C) Validando o Creme: 300 * (1.000.000 / 1100) = 272727.272... toFixed(2) = 272727.27
        expect(proporcao.creme).toBe(272727.27)
    })

    test('Deve calcular a quantidade de sorvetes inteiros (Rendimento)', () => {
        // 1. PREPARAR
        const receita = new Receita()

        // Pegando o peso exato do pote médio descoberto no teste do Sorvete!
        const pesoDoPoteMedio = 1295.906
        // 2. AGIR
        const totalDeSorvetes = receita.calcularQtdeSorvete(pesoDoPoteMedio)
        // 3. VALIDAR: Regra de Negócio do Sorvete (Arredondamento para BAIXO)
        // 1.000.000 / 1295.906 = 771.647... A regra exige cortar as sobras (Math.floor)
        expect(totalDeSorvetes).toBe(771)
    })

    test('Deve permitir criar uma receita com pesos personalizados', () => {
        // PREPARAR: Criando uma receita com o dobro de leite (1000) e creme (600)
        const receitaEspecial = new Receita(1000, 600, 150, 100, 50)
        // VALIDAR: O peso base agora deve ser maior
        expect(receitaEspecial.pesoBase).toBe(1900)
    })
})