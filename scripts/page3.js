const body = document.querySelector("body");

const containerPrincipal = document.getElementById("containerPrincipal");

//menu lateral
const menuLateral = document.getElementById("menuLateral");

const logo = document.createElement("img");
logo.src = "../imagens/logoSQLingo2.png";
logo.id = "logo";
menuLateral.appendChild(logo);

const home = document.createElement("button")
const comandos = document.createElement("button")
comandos.addEventListener("click", function () {
    window.location.href = "../pages/page2.html";
});
home.addEventListener("click", function () {
    window.location.href = "../index.html";
});
home.innerText = "Início";
comandos.innerText = "Comandos";
menuLateral.append(home, comandos);

//menuprincipal
const section = document.getElementById("menuPrincipal");
const titulo = document.createElement("h1");  
titulo.innerText = "Selecione a alternativa correta";
const pergunta = document.createElement("h2");
pergunta.innerText = "Comando utilizado para atualizar dados de uma tabela: ";
section.append(titulo, pergunta)

//botao de dica
const dicaBotao = document.createElement("button");
const dicaImagem = document.createElement("img");
dicaBotao.appendChild(dicaImagem)
dicaImagem.src = "../imagens/dica.png";
pergunta.appendChild(dicaBotao)
dicaBotao.id = "dicaBotao";

const botoesRemover = {
  "INSERT": true,
  "SELECT": true
};
let usoDica = false
dicaBotao.addEventListener("click", () => {
  const botoes = section.querySelectorAll("ul button");
  for (let i = 0; i < botoes.length; i++) {
    if (botoesRemover[botoes[i].innerText]) {
      botoes[i].remove();
    }
  }
  dicaImagem.src = "../imagens/dicaDisableTransparente.png";
  dicaBotao.classList.add("botaoDicaDisable");
  usoDica = true
});

//alternativas em lista
let alternativas = ["DROP", "INSERT", "UPDATE", "SELECT"];

function criarLinha(listaAlternativas) {
  const ul = document.createElement("ul");

  for (let i = 0; i < listaAlternativas.length; i++) {
    let li = document.createElement("li");
    let alternativa = document.createElement("button");
    alternativa.innerText = listaAlternativas[i];

    
    alternativa.addEventListener("click", () => {
      const botoes = ul.querySelectorAll("button");
      for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("buttonselecionado");
      }

      alternativa.classList.add("buttonselecionado");
    });

    li.appendChild(alternativa);
    ul.appendChild(li);
  }

  return ul;
}

const linha1 = criarLinha(alternativas);
section.appendChild(linha1);


//botão verificar
const verificarBotao = document.createElement("button")
verificarBotao.innerText = "Verificar";
verificarBotao.id = "verificarBotao";
containerPrincipal.appendChild(verificarBotao);

const respostaCorreta = "UPDATE";
verificarBotao.addEventListener("click", () => {
  const botaoSelecionado = document.querySelector(".buttonselecionado");

  const respostaUsuario = botaoSelecionado.innerText;
  const botoes = section.querySelectorAll("button");
  if (respostaUsuario === respostaCorreta) {
    botaoSelecionado.style.backgroundColor = "green";
    botaoSelecionado.style.color = "white";
    if (usoDica == false){
      dicaImagem.src = "../imagens/dicaDisableTransparente.png";
      dicaBotao.classList.add("botaoDicaDisable");
    }
  } 
  
  else {
    botaoSelecionado.style.backgroundColor = "red";
    botaoSelecionado.style.color = "white";
    for (let i = 0; i < botoes.length; i++) {
      if (botoes[i].innerText === respostaCorreta) {
        botoes[i].style.backgroundColor = "green";
        botoes[i].style.color = "white";
      }
    }
    if (usoDica == false){
      dicaImagem.src = "../imagens/dicaDisableTransparente.png";
      dicaBotao.classList.add("botaoDicaDisable");
    }
  }
  
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("buttonselecionado");
    botoes[i].disabled = true;
  }
});