const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function CalculaMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);

    media = soma / notas.length;

    return console.log(`A média da sala é ${media}`)
}

CalculaMedia(salaJS);
CalculaMedia(salaJava);
CalculaMedia(salaPython);
