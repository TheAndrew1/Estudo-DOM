let adicionar = document.getElementById("adicionar");
let excluir = document.getElementById("excluir");
let tabela = document.getElementById("tabela");

adicionar.addEventListener("click", add);

function add(){
    let linha = document.createElement("tr");
    let elementos = [];

    for(var i=0; i<4; i++)
    {
        let campos = ["id", "nome", "curso", "e-mail"];
        elementos[i] = document.createElement("td");
        elementos[i].innerText = prompt(`Digite o ${campos[i]} do aluno`);

        linha.appendChild(elementos[i]);
    }
    
    tabela.appendChild(linha);
}