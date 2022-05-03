//capturou o botão para criptografar
var botaoCopiar = document.querySelector("#botao-copiar");
var localEscrito = document.getElementById("retorno-texto");

//funcao para copiar ao clicar
document.getElementById('botao-copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = localEscrito.textContent;
  await navigator.clipboard.writeText(text);
}