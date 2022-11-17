function numPrimo() {
  let n;
  let divisor = 2;
  n=prompt("digite o valor");
  while(n%divisor != 0)
      divisor++;
  
  if(n == divisor){
      document.write(n+ " é primo");
  }
  else{
      document.write(n+ " n é primo");
  }
  
}

