const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial (IA) é um conjunto de tecnologias que permitem aos computadores executar uma variedade de funções avançadas. Quais são as implicações da IA na privacidade dos dados?",
        alternativas: [
            {
                texto: "A IA, embora possa desempenhar um papel fundamental na detecção e prevenção de ameaças à segurança.",
                afirmacao: "afirmação"
            },
            {
                texto: "Também pode ser usada como uma ferramenta para a invasão de privacidade.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Inteligência artificial criando artistas 100% virtuais; músicas, obra de arte,incentivando o consumo não consciente  prejudicando a tradição e cultura. Como preservar a tradição e a cultura no atual contexto regido pelas inteligências artificiais",
        alternativas: [
            {
                texto: "Realizando pesquisas para saber sobre suas tradições e culturas.",
                afirmacao: "afirmação"
            },
            {
                texto: "trabalhando a influência das tradições e culturas em nosso cotidiano",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Tomamos como referência que um consumo consciente é aquele do qual o indivíduo compra somente o necessário, Como a sociedade poderia ter um consumo conciente, Buscando informações no IA?",
        alternativas: [
            {
                texto: "Buscando informação na legislação da saúde",
                afirmacao: "afirmação"
            },
            {
                texto: "Confronto das informações da inteligengia artificial e a pessoal",
                afirmacao: "afirmação"
            }
        ]
    }
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();