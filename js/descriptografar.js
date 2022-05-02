//capturou o botão para descriptografar
var botaoDescripto = document.querySelector("#botao-descripto");

//capturou o local que vai a criptografia e desacriptografia
var localEscrito = document.querySelector(".retorno-texto");

//chamada da função descriptografar
descriptografar(botaoDescripto);

function descriptografar(botaoDescripto){
    botaoDescripto.addEventListener("click", function(){
        var escrito_texto = document.querySelector("#texto-digitar").value;
    
        if(escrito_texto != ""){
            var  descriptografado = escrito_texto.replace(/enter/g, "e"); 
            descriptografado =  descriptografado.replace(/imes/g, "i");      
            descriptografado =  descriptografado.replace(/ai/g, "a");
            descriptografado =  descriptografado.replace(/ober/g, "o");
            descriptografado =  descriptografado.replace(/ufat/g, "u");
            localEscrito.textContent = descriptografado;
        }
    })}