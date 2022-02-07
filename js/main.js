function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
};


function redirecionar() {
    window.open("https://www.google.ru/webhp?client=opera&sourceid=opera");
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}
