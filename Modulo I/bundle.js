"use strict";

var arr = [1, 2, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  //percorre vetor e executa função
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  //percorre e transforma nosso arr em um único numero.
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  //retorna todos itens que dentro de uma seleção retornaram true.
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  //retorna um item passado na verificação, caso não ache retornará undefined
  return item === 2;
});
