var num=parseFloat(prompt("Ingrese un número"));
if(num<0){
	alert(num+" es un número negativo");
}
else if(num===0){
	alert("0 no es negativo ni positivo");
}
else{
	alert(num+" es un número positivo");
}