const body = document.querySelector("body");

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
titulo.innerText = "Comandos de Manipulação de Dados";
section.appendChild(titulo)

let botoes1 = ["SELECT", "INSERT", "UPDATE"];
let botoes2 = ["ALTER", "CREATE", "DROP"];

function criarLinhaBotoes(listaDeComandos) {
  const ul = document.createElement("ul");
  for (let i = 0; i < listaDeComandos.length; i++) {
    let li = document.createElement("li");
    let botao = document.createElement("button");
    botao.innerText = listaDeComandos[i];
    li.appendChild(botao);
    ul.appendChild(li);
  }
  return ul;
}

const linha1 = criarLinhaBotoes(botoes1);
section.appendChild(linha1);

const titulo2 = document.createElement("h1");
titulo2.innerText = "Comandos de Definição de Dados";
section.appendChild(titulo2);

const linha2 = criarLinhaBotoes(botoes2);
section.appendChild(linha2);
