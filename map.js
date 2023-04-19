const notas = [10, 9.5, 8, 7, 6];

// usando forEach
// notas.forEach((nota, index) => {
//     notas.splice(index, 1, nota + 1);
// });
// console.log(notas);

// semelhante ao forEach não alterando o array original
const novasNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(novasNotas);
