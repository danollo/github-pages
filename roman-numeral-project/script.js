const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const input = document.getElementById("number");

function stringToRoman(num) {
  const values = 
  [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";

  for(let i = 0; i < values.length; i++) {
    while (num >= values[i]){
      result += symbols[i];
      num -= values[i];
    }
  }
  return result;
}



convertButton.addEventListener("click", () => {
  const num = parseInt(input.value);
  let errText = "";

  if(isNaN(num)){
    errText = "Please enter a valid number";
    output.innerText = errText;
  } else if (num < 1){
    errText = "Please enter a number greater than or equal to 1";
    output.innerText = errText;
  } else if (num > 3999){
    errText = "Please enter a number less than or equal to 3999";
  output.innerText = errText;
    } else{
    const romanNumeral = stringToRoman(num);
    output.innerText = romanNumeral;
}});
