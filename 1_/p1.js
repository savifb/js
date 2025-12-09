// MATRIZ DE GASTOS CORRIGIDA
let matrizGastos = [
    ["alimentacao", 0],
    ["transporte", 0],
    ["lazer", 0],
    ["outros", 0],
    ["total", 0]
];


// Funções auxiliares
const obterElemento = (id) => document.getElementById(id);
const obterCategoria = () => obterElemento('tipoGasto').value;
const obterValor = () => obterElemento('valorGasto').value;
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;

const obterCategoriaIndex = (matriz, categoria) =>
    matriz.find((item) => item[0] === categoria);

const atualizarMatriz = (categoriaLinha, valor) =>
    categoriaLinha[1] = somaValor(categoriaLinha[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        if (elemento) {
            elemento.textContent = `R$ ${valor.toFixed(2)}`;
        }
    });
};


// 🔥 FUNÇÃO LIMPAR CAMPOS — versão final
const limparCampos = () => {
    const inputValor = obterElemento('valorGasto');
    const selectCategoria = obterElemento('tipoGasto');

    inputValor.value = '';          // limpa campo
    selectCategoria.selectedIndex = 0; // volta para "Alimentação"
    inputValor.focus();             // foca no campo automaticamente
};


// Função principal
function adicionarGasto() {
    const valorInformado = parseFloat(obterValor());
    const categoriaInformada = obterCategoria();

    if (isNaN(valorInformado) || valorNegativo(valorInformado)) {
        alert('Por favor, insira um valor válido!');
        return;
    }

    const categoriaLinha = obterCategoriaIndex(matrizGastos, categoriaInformada);
    const totalLinha = obterCategoriaIndex(matrizGastos, "total");

    atualizarMatriz(categoriaLinha, valorInformado);
    atualizarMatriz(totalLinha, valorInformado);

    atualizarInterface();
    limparCampos();
}
