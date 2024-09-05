alert('Bem vindo ao prorama de soma.');
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;
alert(`O resultado da soma é igual a: ${resultado}`);
/*
forma mais simples eliminando a linha 8, mas se for um código mais complexo 
pode gerar complicações porque a conta que fornece o resultado está implícito.

alert(`O resultado da soma é igual a: ${resultado}`);
 */
