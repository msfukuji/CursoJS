/*
Aritméticos
+ pode ser adição ou concatenação
- / *
** é potenciação
% retorna o resto da divisão
*/
const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // resultado é 15

/* se tiver a constante for uma string '5' o sinal de + vai fazer a concatenação, que é juntar os núemors */
const num3 = '5';
const num4 = 10;
console.log(num3 + num4); // resultado é 510

console.log(num1 - num2); // -5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 0.5
console.log(num1 ** num2); // 9765625

const num5 = 10;
const num6 = 3;
console.log(num5 % num6); // o resto da divisão é 1
console.log(num2 % num1); // o resto da divisão é 0

// os operadores tem precedencia conforme a matemática
console.log(num1 + num2 * num4); // 5 + 10 * 10 = 105. para fazer a soma antes precisa usar () conforme matemática.
console.log((num1 + num2) * num4); // (5 + 10) * 10 = 150

// ++ o valor da variável mais o valor definido
let contador = 1;
contador++; // 2
contador++; // 3
++contador; // 4 / o ++ pode ser antes tb, 
console.log(contador);
