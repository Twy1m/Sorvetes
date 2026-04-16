import Sorvete from "./models/Sorvete.js";
import Receita from "./models/Receita.js";
import Custo from "./models/Custo.js";

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // --- LEITURA DO FORMULÁRIO ---
    const peso       = Number(document.getElementById("peso").value);
    const tonelagem  = Number(document.querySelector('input[name="tonelagem"]:checked').value);

    // --- CÁLCULOS ---
    const sorvete   = new Sorvete(peso);
    const volume    = sorvete.calcularVolume();
    const massa     = sorvete.conversaoMassa();

    const receita           = new Receita();
    const qtdeIngredientes  = receita.calcularQtdeIngredientes();
    const qtdePotes         = receita.calcularQtdeSorvetes(peso);

    const custo             = new Custo();
    const precosIngredientes = custo.calcularCusto(qtdeIngredientes);
    const custoPorPote      = custo.calcularCustoPorPote(qtdePotes);

    // Fator de escala para a tonelagem escolhida (1, 5 ou 12 toneladas)
    const fatorTon = tonelagem;

    
    // --- ATUALIZA O HTML ---
    document.getElementById("res-volume").textContent =
        `${volume.toFixed(2)} cm³`;

    document.getElementById("res-massa").textContent =
        `${massa.toFixed(2)} g`;

    document.getElementById("res-qtde-potes").textContent =
        (qtdePotes * fatorTon).toLocaleString("pt-BR");

    document.getElementById("res-custo-total").textContent =
        `R$ ${(custo.totalCusto * fatorTon).toFixed(2)}`;

    document.getElementById("res-custo-pote").textContent =
        `R$ ${custoPorPote}`;

    // Lista de compras — converte g para kg e aplica tonelagem
    document.getElementById("res-leite").textContent =
        `${((qtdeIngredientes.leite / 1000) * fatorTon).toFixed(2)} kg`;

    document.getElementById("res-creme").textContent =
        `${((qtdeIngredientes.creme / 1000) * fatorTon).toFixed(2)} kg`;

    document.getElementById("res-acucar").textContent =
        `${((qtdeIngredientes.acucar / 1000) * fatorTon).toFixed(2)} kg`;

    document.getElementById("res-sucoMaracuja").textContent =
        `${((qtdeIngredientes.sucoMaracuja / 1000) * fatorTon).toFixed(2)} kg`;

    document.getElementById("res-caldaChocolate").textContent =
        `${((qtdeIngredientes.caldaChocolate / 1000) * fatorTon).toFixed(2)} kg`;
});