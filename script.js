let nomeJogador = "";

const perguntas = [
  {
    texto: "Quem é o Homem-Aranha principal em 'Aranhaverso'?",
    opcoes: ["Peter Parker", "Miguel O'Hara", "Miles Morales", "Gwen Stacy"],
    correta: 2,
    imagem: "img/miles.png"
  },
  {
    texto: "Quem é o Homem-Aranha 2099?",
    opcoes: ["Peter Parker", "Miles Morales", "Gwen Stacy", "Miguel O'Hara"],
    correta: 3,
    imagem: "img/miguel.png"
  },
  {
    texto: "Quem é o vilão grandão do filme?",
    opcoes: ["Venom", "Rei do Crime", "Duende Verde", "Doutor Octopus"],
    correta: 1,
    imagem: "img/rei-do-crime.png"
  }
];

let faseAtual = 0;

function iniciarQuiz() {
  // Pede o nome do jogador com validação
  while (!nomeJogador) {
    nomeJogador = prompt("Digite seu nome para começar:");
    if (!nomeJogador || nomeJogador.trim().length < 2) {
      alert("Digite um nome válido com pelo menos 2 letras.");
      nomeJogador = "";
    }
  }

  faseAtual = 0;
  document.getElementById("mensagem").textContent = `Boa sorte, ${nomeJogador}!`;
  mostrarPergunta();
}

function mostrarPergunta() {
  const pergunta = perguntas[faseAtual];
  document.getElementById("pergunta").textContent = pergunta.texto;
  document.getElementById("imagem-pergunta").src = pergunta.imagem;
  document.getElementById("imagem-pergunta").style.display = "block"; // Mostra a imagem da pergunta

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  pergunta.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.className = "opcao-btn";
    botao.onclick = () => verificarResposta(index);
    opcoesDiv.appendChild(botao);
  });
}

function verificarResposta(escolhida) {
  const correta = perguntas[faseAtual].correta;
  if (escolhida === correta) {
    faseAtual++;
    if (faseAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarVitoria();
    }
  } else {
    mostrarDerrota();
  }
}

function mostrarVitoria() {
  document.getElementById("pergunta").textContent = `Parabéns, ${nomeJogador}! Você venceu! 🕷️`;
  document.getElementById("imagem-pergunta").src = "img/vitoria.png";
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("mensagem").textContent = "Você completou o quiz com sucesso!";
}

function mostrarDerrota() {
  document.getElementById("pergunta").textContent = `Poxa, ${nomeJogador}... Você perdeu 😢`;
  document.getElementById("imagem-pergunta").src = "img/derrota.png";
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("mensagem").textContent = "Tente novamente!";
}

window.onload = iniciarQuiz;
