
let nomeJogador = "";

while (!nomeJogador || nomeJogador.trim() === "") {
  nomeJogador = prompt("Digite seu nome para começar o quiz:");
}

const perguntas = [
  {
    texto: "Qual o nome verdadeiro do Homem-Aranha no Aranhaverso?",
    opcoes: ["Peter Parker", "Miles Morales", "Ben Reilly", "Miguel O'Hara"],
    correta: 1
  },
  {
    texto: "Qual Homem-Aranha é do futuro?",
    opcoes: ["Spider-Gwen", "Peter B. Parker", "Miguel O'Hara", "Miles Morales"],
    correta: 2
  },
  {
    texto: "Quem é o vilão principal no primeiro Aranhaverso?",
    opcoes: ["Rei do Crime", "Venom", "Duende Verde", "Octopus"],
    correta: 0
  }
];

const imagens = [
  "img/miles.png",
  "img/miguel.png",
  "img/rei-do-crime.png"
];

let fase = 0;

function mostrarPergunta() {
  if (fase >= perguntas.length) {
    document.getElementById("mensagem").innerText = `Parabéns, ${nomeJogador}! Você venceu o quiz! 🎉`;
    document.getElementById("pergunta-area").style.display = "none";
    document.getElementById("imagem-pergunta").src = "img/vitoria.png";
    return;
  }

  const atual = perguntas[fase];
  document.getElementById("pergunta").innerText = atual.texto;
  document.getElementById("imagem-pergunta").src = imagens[fase];
  
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.innerText = opcao;
    btn.onclick = () => verificarResposta(index);
    opcoesDiv.appendChild(btn);
  });
}

function verificarResposta(escolha) {
  if (escolha === perguntas[fase].correta) {
    fase++;
    mostrarPergunta();
  } else {
    document.getElementById("mensagem").innerText = `Errou, ${nomeJogador}! Fim de jogo. 😢`;
    document.getElementById("pergunta-area").style.display = "none";
    document.getElementById("imagem-pergunta").src = "img/derrota.png";
  }
}

mostrarPergunta();
