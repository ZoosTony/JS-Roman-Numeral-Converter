$(document).ready(function(){

  function convertToRoman(num) {
    if (num > 0) {
      var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX',       'V', 'IV', 'I'];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanized = "";
  
    for (var i = 0; i < numbers.length; i++) {
      while(numbers[i] <= num) {
        romanized += numerals[i];
        num -= numbers[i];
        }
    }
    
    function clearInputs() {
      $("input").val("");
    }
    
    
    $(".roman-numeral").val(romanized);
    } else {
      $(".roman-numeral").val("Nulla");
    }
    
  }
  
  $(".convertBtn").on("click", function(){
    let decimal = $(".decimal-number").val();
    convertToRoman(decimal);
  });
  
  $(".clearBtn").on("click", function(){
    $(".roman-numeral").val("");
    $(".decimal-number").val("");
  });
});