
// Selecionar todos os botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem")

// Adicionar um ouvinte de evento de clique a cada botão
botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem(indice);


        botao.classList.add("selecionado");



    })

});




function desselecionarPersonagem(indice) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagens[indice].classList.add("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

