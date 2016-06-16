var n1=parseFloat(prompt("Ingrese el primer número"));
var n2=parseFloat(prompt("Ingrese el segundo número"));
if(n1>n2){
	alert(n1+" es mayor que "+n2);
}
else if(n1===n2){
	alert("Ambos números son iguales");
}
else{
	alert(n2+ " es mayor que "+n1);
}