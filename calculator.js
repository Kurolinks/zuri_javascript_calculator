var number1 = parseFloat(prompt('Enter first number: '));
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

alert(`${number1} ${operator} ${number2} = ${result}`);