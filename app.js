let listaDeSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto; 
resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(params) {
    exibirTextoNaTela ('h1', 'jogo do numero secreto');
    exibirTextoNaTela ('p', 'Escolha o número secreto entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let.chute = document.querySelector('imput').value;

    if (chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Correto!');
        let palavraTentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descrobiu o número com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor') ;        
        }else{
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeSorteados.length;

    if (quantidadeDeElementos == 3) {
        listaDeSorteados = [];
    }
    if (listaDeSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

