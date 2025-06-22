const body = document.querySelector("body");

//menu lateral
const menuLateral = document.getElementById("menuLateral");
const home = document.createElement("button")
const comandos = document.createElement("button")
home.innerText = "Home";
comandos.innerText = "Comandos";
menuLateral.append(home, comandos);

//caminho principal
const section = document.getElementById("caminhoPrincipal");
const titulo = document.createElement("h1");
titulo.innerText = "1- Introdução";
const atividadeButton = document.createElement("button");
atividadeButton.innerText = "1";
const atividadeButton2 = document.createElement("button");
atividadeButton2.innerText = "2";
section.append(titulo, atividadeButton, atividadeButton2);