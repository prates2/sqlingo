const body = document.querySelector("body");

//menu lateral
const menuLateral = document.getElementById("menuLateral");
const home = document.createElement("button")
const comandos = document.createElement("button")
const lista = document.createElement("ul")
const item1 = document.createElement("li")
const item2 = document.createElement("li")
home.innerText = "Home";
comandos.innerText = "Comandos";
menuLateral.appendChild(lista);
lista.append(item1, item2);
item1.appendChild(home);
item2.appendChild(comandos);

//caminho principal
const section = document.getElementById("caminhoPrincipal");
const titulo = document.createElement("h1");
titulo.innerText = "1- Introdução";
const atividadeButton = document.createElement("button");
atividadeButton.innerText = "1";
const atividadeButton2 = document.createElement("button");
atividadeButton2.innerText = "2";
section.append(titulo, atividadeButton, atividadeButton2);