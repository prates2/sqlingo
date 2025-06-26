const body = document.querySelector("body");

//menu lateral
const menuLateral = document.getElementById("menuLateral");

const logo = document.createElement("img");
logo.src = "./imagens/logoSQLingo2.png";
logo.id = "logo";
menuLateral.appendChild(logo);

const home = document.createElement("button")
const comandos = document.createElement("button")
comandos.addEventListener("click", function () {
    window.location.href = "./pages/page2.html";
});
home.innerText = "Início";
home.addEventListener("click", function () {
    window.location.href = "./index.html";
});
comandos.innerText = "Comandos";
menuLateral.append(home, comandos);

//caminho principal
const section = document.getElementById("caminhoPrincipal");

const titulo = document.createElement("h1");
titulo.innerText = "1- Introdução";
const atividadeButton = document.createElement("button");
atividadeButton.innerText = "1";
atividadeButton.addEventListener("click", function () {
    window.location.href = "./pages/page3.html";
});
const atividadeButton2 = document.createElement("button");
atividadeButton2.innerText = "2";
section.append(titulo, atividadeButton, atividadeButton2);