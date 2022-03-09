// ARRAY
const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]
const structuring = [numerosPares, numerosImpares]
const destructuring = [...numerosPares, ...numerosImpares]
console.log(structuring)
console.log(destructuring)

const [num1, num2, outros] = [1, 2, 3, 4, 5]
console.log(num1, num2, outros)
const [num3, num4, ...varios] = [1, 2, 3, 4, 5]
console.log(num3, num4, ...varios)

const [nome1 = 'Loop'] = []
console.log(nome1)

// OBJETO
const pessoa = {
    nome: 'Loop',
    idade: 1
}
console.log(pessoa)
console.log(pessoa.nome)

// spread Operator ...
const pessoaComTelefone = { ...pessoa, telefone: 999999 }
console.log(pessoaComTelefone)

// rest Operator ...
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters

const { nome } = pessoa
console.log(nome)
const { idade } = pessoa
console.log(idade)

// Operador de coalescência nula
const foo = null ?? 'default string';
console.log("foo:", foo);

// FUNÇÃO
function imprimeDados(dados) {
    console.log('dados:', dados)
}
imprimeDados(pessoa)

// SEM RETORNO
function retornaInfo(dados) {
}
const retorna = retornaInfo(pessoa)
console.log('retorna:', retorna)

// COM RETORNO
function retornaDados(dados) {
    return dados
}
const retorno = retornaDados(pessoa)
console.log('retorno:', retorno)

function retornaDadosEspecificos({ nome, idade }) {
    console.log(nome, idade)
}
retornaDadosEspecificos(pessoa)
