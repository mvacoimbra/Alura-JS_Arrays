const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// criando um array de duas dimensoes (matriz)
const lista2D = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista2D[0].includes(aluno)) {
    // const alunos = lista2D[0];
    // const medias = lista2D[1];

    // desestruturação de listas (destructuring)
    const [alunos, medias] = lista2D

    const indexAluno = alunos.indexOf(aluno);
    const media = medias[indexAluno];

    console.log(`${aluno} possui a media: ${media}`);
  } else {
    console.log(`${aluno} nao esta cadastrado!`);
  }
}

exibeNomeENota("João");
