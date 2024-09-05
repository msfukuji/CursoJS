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

// ++ incremento - pré e pós
let contador = 1;
contador++; // 2
contador++; // 3
++contador; // 4 / o ++ pode ser antes tb, 
console.log(contador++);

// -- decremento - pré e pós
console.log(--contador);

// boa prática é fazer o incremento e depois chamar o console.log
// Para o javascript entender de que se trata de um número, podemos usar
// parseInt (inteiro), parseFloat (decimais) ou o mais atual Number.
const num7 = 10;
const num8 = Number('5.35');
console.log(num7 + num8); // 15.35
