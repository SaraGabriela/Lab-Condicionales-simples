function precioVenta(){
var mp=parseFloat(prompt("¿Cuál es el costo de su materia prima?"));
var codigo=prompt("Ingrese el código de su producto");
switch (codigo) {
	case(codigo= "1"):
	var mo=mp*0.8;
	var gf=mp*0.28;
		break;
	case(codigo= "2"):
	var mo=mp*0.85;
	var gf=mp*0.3;
		break;	
	case(codigo= "3"):
	var mo=mp*0.75;
	var gf=mp*0.35;
		break;
	case(codigo= "4"):
	var mo=mp*0.75;
	var gf=mp*0.28;
		break;	
	case(codigo= "5"):
	var mo=mp*0.8;
	var gf=mp*0.3;
		break;
	case(codigo= "6"):
	var mo=mp*0.85;
	var gf=mp*0.35;
		break;
	default:
	alert("Código inválido!");
	return false;
	break;												
}
var cp=mp+mo+gf;
var pv=redondeo(cp+(cp*0.45));
alert("El precio de venta es de "+pv);
}

function redondeo(numero)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*1000)/1000;
return resultado;
}