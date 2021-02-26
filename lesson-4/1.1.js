'use strict';
/*
Сделайте в стиле es5 конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. 
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
  this.price = this.price - this.price / 100 * 25;
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = this.price - this.price / 100 * 25;
  }
}
