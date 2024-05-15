/* 
Operadores aritméticos, de atribuição e incremento 
Aritiméticos:
+ Adição / Conncatenação
- Subtração
/ Divisão
* Multiplicação
** Potenciação
% Resto da divisão
Precedência: () ** * / % + -
*/
const num1 = 10;
const num2 = 5;
const num3 = '5';
console.log(num1 + num2);
console.log(num1 + num3);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log((num1 + num2) * num3);

let contador = 1
contador++; // 2 -> Não pode usar o operador ++ com const, pois const não deixa mudar o valor
contador++; // 3
console.log(contador);
