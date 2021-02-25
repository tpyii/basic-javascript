'use strict';
/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
for (let i = 0, tree = 'x'; i < 20; console.log(tree), tree += 'x', i++) {}
