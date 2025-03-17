let nomes = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo").value.trim();//Captura o valor digitado no campo de entrada com ID "amigo", e usa .trim() para remover espaços extras no início e no final.
    let listaAmigos = document.getElementById("listaAmigos"); 
    
    if (inputNome === "") {
        alert("Por favor, insira um nome válido.");
    } else {
        nomes.push(inputNome);
        let novoItem = document.createElement("li");
        novoItem.textContent = inputNome;
        listaAmigos.appendChild(novoItem);
        document.getElementById("amigo").value = ""; // Limpar campo de nomes
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
    // Verifica se há nomes na lista
    if (nomes.length === 0) {
        alert("Nenhum nome disponível para o sorteio.");
    } 

    // Verifica se há pelo menos dois nomes na lista
    if (nomes.length < 2){
        alert('Favor insira mais um nome para sorteio!');
        return;
    }
    
    else {
        let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        let itemResultado = document.createElement("li");
        itemResultado.textContent = `Parabéns o amigo secreto sorteado foi: ${sorteado}`;
        resultado.appendChild(itemResultado);
    }

}

function resetarLista() {//Limpa Lista para novo sorteio
    nomes = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
