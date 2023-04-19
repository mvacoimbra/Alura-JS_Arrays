const notas = [10, 6.5, 8, 7.5];

let soma = 0;

// o método forEach() recebe como argumento uma função (essa prática é conhecida como "callbackFunction") essa função pode possuir 3 argumentos que armazenarão 1 = o valor do atual elemento, 2 = o index do elemento, e 3 o array de origem completo.
notas.forEach((nota) => {
  soma += nota;
});

const media = soma / notas.length;

console.log(`Media = ${media}`);

// notas.forEach((currentValue, index, array) => {
//     console.log(currentValue, index)
// });
