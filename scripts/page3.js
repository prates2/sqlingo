const body = document.querySelector("body");

const containerPrincipal = document.getElementById("containerPrincipal");

//menu lateral
const menuLateral = document.getElementById("menuLateral");

const logo = document.createElement("img");
logo.src = "../imagens/logo.png";
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
const section = document.getElementById("comandos");
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

dicaBotao.addEventListener("click", () => {
  const botoes = section.querySelectorAll("ul button");
  botoes[2].remove();
  botoes[3].remove();
});

//alternativas em lista
let alternativas = ["DROP", "INSERT", "UPDATE", "SELECT"];

function criarLinha(listaAlternativas) {
  const ul = document.createElement("ul");
  for (let i = 0; i < listaAlternativas.length; i++) {
    let li = document.createElement("li");
    let alternativa = document.createElement("button");
    alternativa.innerText = listaAlternativas[i];
    li.appendChild(alternativa);
    ul.appendChild(li);
  }
  return ul;
}

const linha1 = criarLinha(alternativas);
section.appendChild(linha1);

//botão verificar resposta
const verificarBotao = document.createElement("button")
verificarBotao.innerText = "Verificar";
verificarBotao.id = "verificarBotao";
containerPrincipal.appendChild(verificarBotao);