/* 
Não podemos criar constantes com palavras 
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não pode modificar o valor de uma constante
NÃO UTILIZE VAR, UTILIZE CONST

CONSTANTES (const) NÃO PODEM SER ALTERADAS AO LONGO DO CÓDIGO!!!!

*/

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = '100';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);
console.log(typeof terceiroNumero);
console.log(primeiroNumero + terceiroNumero); // concatena os números, 5 com 100 = 5100
