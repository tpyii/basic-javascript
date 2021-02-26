'use strict';
/*
С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
...
10 – четное число
Для решения этой задачи используйте остаток от деления на 2, подробнее здесь
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
*/
for (let i = 0, result; i <= 10; i++) {
  if (i === 0)
    result = `${i} - это ноль`;
  else 
    result = `${i} - ${i % 2 ? 'нечетное число' : 'четное число'}`;
  console.log(result);
}
