let adicionar = document.getElementById("adicionar");
let excluir = document.getElementById("excluir");
let tabela = document.getElementById("tabela");

adicionar.addEventListener("click", add);
excluir.addEventListener("click", del);

let id = [];

function add(){
    let linha = document.createElement("tr");
    let elementos = [];

    for(var i=0; i<4; i++)
    {
        let campos = ["nome", "curso", "e-mail"];

        if(i == 0)
        {
            elementos[i] = document.createElement("td");
            
            if(id.length == 0)
            {
                id[0] = 1;
            }
            else
            {
                id[id.length] = id[id.length - 1] + 1;
            }

            elementos[i].innerText = id[id.length - 1];
        }
        else
        {
            elementos[i] = document.createElement("td");
            elementos[i].innerText = prompt(`Digite o ${campos[i-1]} do aluno`);
        }
        

        linha.appendChild(elementos[i]);
    }
    
    linha.id = elementos[0].innerText;
    tabela.appendChild(linha);
}

function del(){
    let id = prompt("Digite o id do aluno a ser removido");
    let linha = document.getElementById(id);
    
    tabela.removeChild(linha);
}