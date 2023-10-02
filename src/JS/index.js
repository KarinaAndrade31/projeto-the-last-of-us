/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botôes
    
    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão cicado como se estivesse selecionado

    - passo 5 - esconder a imagem ativa de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botôes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       
       desativarBotaoSelecionado();

       selecionarBotaoCarrossel(botao);

       esconderImagemAtiva();

       mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

