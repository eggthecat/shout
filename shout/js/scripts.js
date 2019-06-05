// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//   var number1 = parseInt($("#add1").val());
//   var number2 = parseInt($("#add2").val());
//   var result = add(number1, number2);
//     $("#output").text(result);
// });
// });
// var change=function(num){}

// var shout = function(word1) {
//   return word1.toUpperCase();
// }

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  var word1 = ($("#input1").val());
  var word2 = word1.toUpperCase();
  var result = word2.slice(-8);
    $("#output").text(result);
});
});
// var change=function(num){}
