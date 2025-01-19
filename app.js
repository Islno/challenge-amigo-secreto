let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo").value.trim();
    if (input) {
        listaAmigos.push(input);
        console.log(listaAmigos);
        document.getElementById("amigo").value = ''; 
        atualizarListaAmigos();
    } else {
        alert("O campo de nome está vazio.");
    }
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; 
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    if (listaAmigos != null) {
        document.getElementById("listaAmigos").innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
    }
    else {
        alert("Não há amigos para sortear.");
    }
}