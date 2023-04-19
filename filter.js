const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// filter verifica os elementos array e pode retornar true ou false, para inclui-los ou não em um novo array
const reprovados = alunos.filter((_, index) => {
    return medias[index] < 7;
});

console.log(reprovados);
