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
        console.log(criptografado);
        localEscrito.textContent = criptografado;

    }
})}


    