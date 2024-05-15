/*
Marcelo Fukuji tem 40 anos, pesa 89kg, tem 1.78 de altura e seu IMC é de 27.5.
Marcelo Fukuji nasceu em 1983
*/
const nome = 'Marcelo';
const sobrenome = 'Fukuji';
const idade = 40;
const peso = 89;
const alturaEmMetros = 1.78;
let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos de idade, seu peso é de', peso, 'kg, tem de altura', alturaEmMetros, 'm e seu IMC é de', imc, '.');
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.');
