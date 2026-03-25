let valorContador = 0;
const spanContador = document.getElementById("contador");
const campoTexto = document.getElementById("campoTexto");
const spanCaracteres = document.getElementById("contadorCaracteres");
const containerParagrafos = document.getElementById("containerParagrafos");
const containerListas = document.getElementById("containerListas");

window.incrementar = function() {
    valorContador++;
    spanContador.textContent = valorContador;
};

window.decrementar = function() {
    if (valorContador === 0) {
        alert("O contador já está em zero!");
        return;
    }
    valorContador--;
    spanContador.textContent = valorContador;
};

window.atualizarCaracteres = function() {
    let texto = campoTexto.value;
    let semEspacos = texto.replace(/\s/g, "");
    spanCaracteres.textContent = semEspacos.length;
};

campoTexto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let texto = campoTexto.value.trim();
        if (texto !== "") {
            let novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = texto;
            containerParagrafos.appendChild(novoParagrafo);
            campoTexto.value = "";
            atualizarCaracteres();
        }
    }
});

window.adicionarLista = function() {
    let tipo = document.getElementById("tipoLista").value;
    let novaLista = document.createElement(tipo);
    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        novaLista.appendChild(item);
    }
    containerListas.appendChild(novaLista);
};

window.resetarTudo = function() {
    valorContador = 0;
    spanContador.textContent = "0";
    containerParagrafos.innerHTML = "";
    containerListas.innerHTML = "";
    campoTexto.value = "";
    atualizarCaracteres();
};