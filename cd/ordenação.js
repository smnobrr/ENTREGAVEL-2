
function ordenacaoteste(){

var numeros = [5,32,1,838,34,2,5,9,8,2,98,42,64];
var numerocres = numeros.sort(function(a, b) {
    return a - b;
});
document.write(numerocres);
}