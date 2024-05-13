/* 
Constantes: 
Não podemos utilizar palavras reservadas para criar constantes, e.g. if, let, console etc.
Constantes precisam ter nomes significativos, e.g. nomeCidade, idadeCliente, ano, nomeCliente
Não podemos criar constantes com nome iniciado por número, e.g. 3nergia.
Não podem conter espaços ou traços, e.g. nome-Cliente, nome Cliente, assim utilizar a notação camelCase, e.g. nomeCompletoDoCliente, nomeCliente, 
Case-sensitive, letra maiuscula e minuscula fazem diferença, e.g. nomeCliente e nomecliente são variáveis diferentes.
Não pode modificar o valor de uma constante.
NÃO UTILIZE VAR, UTILIZE CONST.
SEMPRE UTILIZAR CONST PARA EVITAR A ALTERAÇÃO DO VALOR DA VARIÁVEL NO CÓDIGO, CASO NECESSÁRIO, ALTERAR PARA LET.
*/

const nome = 'João';
console.log(nome);

// + - * /
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultado * 3;
console.log (resultado);
console.log (resultadoDuplicado);
console.log (resultadoTriplicado);

// Para verificar o tipo do elemento utiliza typeof:
const terceiroNumero = '5';
console.log (typeof primeiroNumero);
console.log (typeof terceiroNumero);
console.log (terceiroNumero + segundoNumero);