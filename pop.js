const notas = [10, 6, 8, 5.5, 10];

// uso do método pop() para remover um elemento no final do array
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// template string
console.log(`A média é ${media}.`);