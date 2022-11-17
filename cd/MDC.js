
function mdc(){
function calcularMDC (num1, num2) {

var resto;

do {

    resto = num1 % num2;

    num1 = num2;

    num2 = resto;

} while (resto != 0);

return num1;

}
num1 = parseInt(prompt("Informe o num1"))
num2 = parseInt(prompt("Informe o num2"))
var resultado = calcularMDC(num1, num2);

alert(resultado);
}