/* 
Luiz Otávio tem 30 anos, pesa 84kg
tem 1.8m de altura e seu IMC é de 25.925925925924.
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 34;
const peso = 84;
const altura = 1.80;
let imc; // peso/(altura * altura)
let anoNascimento;

imc = parseInt (84 / (altura * altura));
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg, tem', altura + 'm e seu IMC é de', imc,'e nasceu em', anoNascimento + '.');
