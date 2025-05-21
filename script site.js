let nome = "Jotinha"
document.getElementById("mercearia").textContent = "Mercearia do " + nome

let pedidos = []

function adicionarItem(){

    const inputPedido = document.getElementById("pedido");
    let pedido = inputPedido.value.trim();

    const mensagem = document.getElementById("mensagem")
    
    if (pedido == "") {
        let messageError = "Digite um item para adicionar a sua lista de compras!"
        mensagem.textContent = messageError
    } else {
        let messageSucess = "Item adicionado com sucesso!";
        mensagem.textContent = messageSucess; 
        pedidos.push(pedido)
        renderizarPedidos()
    }

    inputPedido.value = ""
}
    
function renderizarPedidos(){
    const listaPedidos = document.getElementById("lista-de-itens")
    listaPedidos.innerHTML = ""

    for (let i = 0; i < pedidos.length; i++){
        let novoItem = document.createElement("li")
        novoItem.textContent = pedidos[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerItem(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarItem(i)

        novoItem.appendChild(botaoRemover)
        novoItem.appendChild(botaoEditar)
        listaPedidos.appendChild(novoItem)
    }
}

function removerItem(i) {
    pedidos.splice(i, 1)
    renderizarPedidos()
}

function editarItem(i) {
    let itemEditado = prompt("Edite o item:")
    if (itemEditado.trim() !== "") {
        pedidos[i] = itemEditado
        renderizarPedidos()
    }
}

function limparItens() {
    pedidos.length = 0
    renderizarPedidos()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de Pedidos limpa com sucesso!"
}