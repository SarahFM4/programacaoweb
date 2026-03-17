/* 1 - Crie um jogo onde o computador gera um número aleatório de 1 a 20, e o usuário
precisa adivinhar qual é. O jogo deve dar dicas se o número digitado for maior ou menor
que o número secreto. O jogo só termina quando o usuário acertar. */

let numeroSecreto = null;

function getInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.gerar = function() {
    numeroSecreto = getInt(1, 20);
    let destino = document.getElementById("gerando");
    destino.innerHTML = "Jogo iniciado! Tente adivinhar o número de 1 a 20.";
    
    const input = document.getElementById("num1");
    if(input) input.value = "";
    
    console.log("Número secreto (teste):", numeroSecreto);
};

window.enviar = function() {
    if (numeroSecreto === null) {
        alert("Clique em 'Gerar Número' primeiro!");
        return;
    }
    
    let input = document.getElementById("num1");
    let palpite = parseInt(input.value);

    if (isNaN(palpite)) {
        alert("Digite um número válido!");
        return;
    }

    let mensagem = document.getElementById("gerando");

    if (palpite === numeroSecreto) {
        mensagem.innerHTML = `Parabéns! Você acertou! O número era ${numeroSecreto}.`;
        numeroSecreto = null; 
    } else if (palpite < numeroSecreto) {
        mensagem.innerHTML = `O número secreto é MAIOR que ${palpite}.`;
    } else {
        mensagem.innerHTML = `O número secreto é MENOR que ${palpite}.`;
    }
    
    input.value = "";
    input.focus(); 
};

/* 2 – Crie um jogo de Pedra, Papel ou Tesoura onde:
•O usuário escolhe uma das três opções digitando no prompt().
•O computador escolhe uma opção aleatória.
O programa deve determinar o vencedor e exibir o resultado no console.log(). */

const opcoes = ["pedra", "papel", "tesoura"];

window.iniciar = function() {
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura").toLowerCase();
    if (!opcoes.includes(escolhaUsuario)) {
        console.log("Opção inválida. Tente novamente.");
    } else {
        const indiceComputador = getInt(1, 3);
        const escolhaComputador = opcoes[indiceComputador];

        console.log(`Você escolheu ${escolhaUsuario}.`);
        console.log(`Computador escolheu ${escolhaComputador}`);
        
        if (escolhaUsuario === escolhaComputador) {
            console.log("Empate!");
        } else if (
            (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
            (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
            (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
        ) {
            console.log("Você venceu!");    
        } else {
            console.log("Computador venceu!");
        }

    }
}

/* 3 - Crie um programa que pede ao usuário para digitar um número e, em seguida, exibe
a tabuada desse número de 1 a 10 no formato de uma tabela.
Exemplo de saída:
Se o número escolhido por 5, a saída será:
5x1=5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50 */

window.tabuada = function() {
    const numero = parseInt(document.getElementById("num2").value);
    let tabela = document.getElementById("tabela");

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    tabela.innerHTML = `
        <tr>
            <td>Multiplicação</td>
            <td>Resultado</td>
        </tr>`;
    
    for (let i = 1; i <= 10; i++) {
        tabela.innerHTML += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }
}

/* 4 - Crie um programa que desenha um triângulo de asteriscos (*) no console, onde o
número de linhas é especificado pelo usuário.
Exemplo de saída:
Se o usuário digitar 5 para o número de linhas, o resultado será:
*
**
***
****
***** */

window.triangulo = function() {
    const input = document.getElementById("num3");
    const linhas = parseInt(input.value);
    let output = document.getElementById("triangulo");

    output.innerHTML = "";

    if (isNaN(linhas) || linhas <= 0) {
        output.innerHTML = "Por favor, digite um número positivo.";
    } else {
        let resultado = "";
        for (let i = 1; i <= linhas; i++) {
            let linha = "*".repeat(i);
            resultado += linha + "<br>";
            console.log(linha);
        }
        output.innerHTML = resultado;
    }
}

/* 5 - Escreva um programa para encontrar a soma da série 1 + 11 + 111 + ... n termos.
Conforme a entrada a seguir:
Exemplo da saída:
Se o usuário digitar a quantidade de termos igual a 5, o resultado será:
1 + 11 + 111 + 1111 + 11111
A soma é: 12.345 */

window.soma = function() {
    const numero = document.getElementById("num3");
    const input = parseInt(numero.value);
    let output = document.getElementById("soma");

    if (isNaN(input) || input <= 0) {
        output.innerHTML = "Por favor, digite um número positivo.";
    } else {
        let termo = 0;     
        let total = 0;       
        let expressao = "";  

        for (let i = 1; i <= input; i++) {
            termo = termo * 10 + 1;
            total += termo;

            expressao += (i === 1) ? termo : ` + ${termo}`;
        }
        
        output.innerHTML = `${expressao} <br> A soma é: ${total.toLocaleString('pt-BR')}`;
    }
}
