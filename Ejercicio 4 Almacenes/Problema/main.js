var precio=parseFloat(prompt("¿Cuál es elprecio del traje?"));
if(precio>2500){
	var desc=precio*0.15;
}
else{
	var desc=precio*0.08;
}
var pf=precio-desc;
alert("El precio final del traje es de $"+pf+", con un descuento de $"+desc);