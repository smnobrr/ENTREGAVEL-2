function contagem(){
var n = prompt("Número de notas");
var nota;
var cont = 0;
var i = 0;

while(i<n){
	i=i+1;
	nota = prompt("Nota do aluno: ");
	document.write(nota + "<br>");
	if (nota >= 5){
		cont++;
	}
}
document.write("Número de aprovações : " + cont);
}