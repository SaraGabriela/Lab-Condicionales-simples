function valida(nota){
var nuevo;
	while(nota<1 || nota>10){
alert("¡Debe ser un número entre 1 y 10!");
nuevo = parseFloat(prompt("Ingrese su nota de nuevo"));
return nuevo;
}
nuevo=nota;
return nuevo;
}
var n1=parseFloat(prompt("Ingrese su primera nota"));
var nota1=valida(n1);
var n2=parseFloat(prompt("Ingrese su segunda nota"));
var nota2=valida(n2);
alert(nota2);
var n3=parseFloat(prompt("Ingrese su tercera nota"));
var nota3=valida(n3);
var promedio=(nota1+nota2+nota3)/3;
if(promedio>=6){
	alert("Aprobó con un promedio de "+promedio);
}
else{
	alert("Desaprobó con un promedio de "+promedio);
}