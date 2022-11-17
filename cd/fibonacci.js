function fibonacci(){
    var n = prompt("Digite a quantidade de termos da sequência de Fibonacci a serem apresentados");
    var a = 0;
    var b = 1;
    var i = 2;

    while(i<n){
        document.write(a + ", " + b +  ", ");
        a = a + b;
        b = a + b;
        i = i+2;
    }
    if(i==n){
        document.write(a + ", " + b);
    }
    else
        document.write(a);
}