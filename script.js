const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o símbolo das Olímpiadas?",
        alternativas: [
            {
                texto: "Anéis entrelaçados",
                afirmacao: "Parabéns, você acertou! Os cinco anéis representam os continentes. O anél azul representa a Europa, O amarelo a Àsia, o preto a África, a Oceania verde e vermelho as Américas."
            },
            {
                texto: "Estrelas de cinco pontas",
                afirmacao: "Infelizmente você errou , mas tenho certeza que com um pouquinho de pesquisa acertará na próxima vez!"
            }
        ]
    },
    {
        enunciado: "Qual a totalidade de medalhas que o Brasil ganhou nas Olímpiadas de 2024?",
        alternativas: [
            {
                texto: "15 medalhas",
                afirmacao: "Infelizmente você errou , mas tenho certeza que com um pouquinho de pesquisa acertará na próxima vez!"
            },
            {
                texto: "20 medalhas",
                afirmacao: "Parabéns, você acertou! Foram 3 medalhas de ouro, 7 de prata e 10 de bronze"
            }
        ]
    },
    {
        enunciado: "Onde foi as Olímpiadas de 2024?",
        alternativas: [
            {
                texto: "Espanha",
                afirmacao: "Infelizmente você errou , mas tenho certeza que com um pouquinho de pesquisa acertará na próxima vez!"
            },
            {
                texto: "França",
                afirmacao: "Parabéns, você acertou! As Olímpiadas de 2024 ocorreram em Paris, na França"
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
    historiaFinal+ = afirmacao +" ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "IA mostra o perfil de quem conheçe as Olimpíadas";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();