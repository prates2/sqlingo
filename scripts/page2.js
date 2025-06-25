const body = document.querySelector("body");

//menu lateral
//const menuLateral = document.getElementById("menuLateral");
const menuLateral = document.createElement("nav");
menuLateral.id = "menuLateral"
body.appendChild(menuLateral)

const logo = document.createElement("img");
logo.src = "./imagens/logo.png";
logo.id = "logo";
menuLateral.prepend(logo);

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

//caminho principal
const div = document.createElement("div");
const section = document.createElement("section");
section.id = "caminhoPrincipal";
body.appendChild(div)
div.appendChild(section)
//const section = document.getElementById("caminhoPrincipal");
const titulo = document.createElement("h1");
titulo.innerText = "Comandos";
const comando1 = document.createElement("button");
const comando2 = document.createElement("button");
const comando3 = document.createElement("button");
comando1.innerText = "select";
comando2.innerText = "insert";
comando3.innerText = "seila";
section.append(titulo, comando1, comando2, comando3);