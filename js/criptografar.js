//capturou o botão para criptografar
var botaoCripto = document.querySelector("#botao-cripto");

//capturou o local que vai a criptografia e desacriptografia
var localEscrito = document.querySelector(".retorno-texto");

//chamada da função criptografar
criptografar(botaoCripto);

// função para criptograr o que foi escrito, apóss clicar no botão.//
function criptografar(botaoCripto){
botaoCripto.addEventListener("click", function(){
    var escrito_texto = document.querySelector("#texto-digitar").value;

    if(escrito_texto != ""){
        var criptografado = escrito_texto.replace(/e/g, "enter"); 
        criptografado = criptografado.replace(/i/g, "imes");      
        criptografado = criptografado.replace(/a/g, "ai");
        criptografado = criptografado.replace(/o/g, "ober");
        criptografado = criptografado.replace(/u/g, "ufat");
        localEscrito.textContent = criptografado;
        //colocando a mensagem na tela
        localEscrito.style.display = "block";
        //colocando o botão de copiar na tela
        var botaoCopiar = document.querySelector("#botao-copiar").style.display = "block";
        //escondendo imagem e mensagens
        var imagemTexto = document.querySelector(".imagem-saida").style.display = "none";
        var mensagemTexto = document.querySelector(".mensagem-saida").style.display = "none";
        var mensagemInformativa = document.querySelector(".mensagem-informativa").style.display = "none";
    }
})}
