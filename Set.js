const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Set e uma classe do JS que remove automaticamente duplicatas
const novosNomes = [...new Set(nomes)]

console.log(novosNomes);