let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
botao1.value = prompt("Primeiro time:");
botao2.value = prompt("Segundo time:");

let campo1 = 0;
let campo2 = 0;
let pontos_1 = document.getElementById("pontos1");
let pontos_2 = document.getElementById("pontos2");
pontos_1.innerHTML = `<p>${campo1}</p>`;
pontos_2.innerHTML = `<p>${campo2}</p>`;

let limpar = document.getElementById("limpar");

function gol1(){
    campo1++;
    pontos_1.innerHTML = `<p>${campo1}</p>`;

    cores();
}

function gol2(){
    campo2++;
    pontos_2.innerHTML = `<p>${campo2}</p>`;

    cores();
}
function cores()
{
    if(campo1 == campo2)
        botao1.style.backgroundColor = botao2.style.backgroundColor = "yellow";
    else if(campo1 > campo2)
    {
        botao1.style.backgroundColor = "green";
        botao2.style.backgroundColor = "red";
    }
    else
    {
        botao1.style.backgroundColor = "red";
        botao2.style.backgroundColor = "green";
    }
}
function zerar(){
    campo1 = campo2 = 0;

    pontos_1.innerHTML = `<p>${campo1}</p>`;
    pontos_2.innerHTML = `<p>${campo2}</p>`;

    botao1.style.backgroundColor = botao2.style.backgroundColor = "yellow";
}

botao2.addEventListener("click", gol2);
limpar.addEventListener("click", zerar);