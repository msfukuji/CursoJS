/* 
var - o valor da variável pode ser redeclarada;
let - não deixa o valor da variável ser redeclarada;
Não criar variável sem const e sem let: nome = 'Luiz';
*/
console.log('Utilizando var:');
var nome = 'Marcelo';
var nome = 'Fukuji';
console.log(nome);

console.log('Utilizando let:');
let names = 'Marcelo';
console.log(names);
names = 'Fukuji';
console.log(names);
