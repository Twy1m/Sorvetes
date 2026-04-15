import Sorvete from "./models/Sorvete.js";
import Receita from "./models/Receita.js";
import Custo from "./models/Custo.js";
const divRes = document.getElementById("divRes");

// const peso = Number(document.getElementById('peso'))

const tamanho = new Sorvete(peso);
const pesoSorvete = tamanho.conversaoMassa();

const receita = new Receita();
const qtdeIngredientes = receita.calcularQtdeIngredientes();
const qtdeSorvete = receita.calcularQtdeSorvetes(peso);

const custo = new Custo();
const precosIngredientes = custo.calcularCusto(qtdeIngredientes);

divRes.innerHTML += `<p>A quantidade de sorvete é: <strong>${qtdeSorvete}</strong></p>`;

divRes.innerHTML += `<p>--- Quantidade de Ingredientes ---</p> 
                    <pre>${JSON.stringify(qtdeIngredientes, null, 2)}</pre>`;

divRes.innerHTML += `<p>--- Custo dos Ingredientes (R$) ---</p>
                   <pre>${JSON.stringify(precosIngredientes, null, 2)}</pre>`;

divRes.innerHTML += `<p>--- Custo por pote (R$) ---</p>
<pre>${JSON.stringify(custo.calcularCustoPorPote(), null, 2)}</pre>`;

divRes.innerHTML += ` <p>O custo total de produção é: <strong>R$ ${custo.totalCusto()}</strong></p>
                     <p>O custo de massa por sorvete é: <strong>R$ ${(custo.totalCusto() / qtdeSorvete).toFixed(2)}</strong></p>`