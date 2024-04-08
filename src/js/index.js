const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos= document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click',()=>{
    //adicionar classe 'ativo' nos projetos escondidos
    mostrarMaisProjetos();
//esconder o botão de mostrar mais

    esconderBotao();
})

function newFunction() {
    botaoMostrarProjetos.classList.add("remover");
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
