
function exibirTexto(tag, texto) {
    let txt = document.querySelector(tag);
    txt.innerHTML = texto;
}

function numberSecret() {
    return parseInt(Math.random() * 10+1);
}

let genericNumber = numberSecret();
alert(genericNumber);

let kick;
let tentativa = 1;

function check() {
    while(kick!=genericNumber) {
        kick = document.querySelector("input").value;
        if(kick==genericNumber) {
            let palavraTentativa = tentativa > 1 ? `Parabéns! Você acertou. Para isso foram feitas ${tentativa} tentativas!` : "Parabéns! Você conseguiu acertar de primeira!";
            alert(palavraTentativa);
            break;
        }
        tentativa ++
        if(kick>genericNumber) {
            alert("O número é menor! ");
            break
        } else {
            alert("O número é maior!");
            break;
        }
    }
}

exibirTexto("h1", "Bem-vindo ao jogo do número secreto");
exibirTexto("p", "Vamos jogar!");
let botao = document.querySelector("button");
botao.onclick = check;