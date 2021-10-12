var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papelito = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papelito);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath(); 
}

function dibujarTeclado(evento)
{
	var colorcito = "green";
	var movimiento = 10;
	switch(evento.keyCode)
	{
		case teclas.DOWN:
		dibujarLinea(colorcito, x, y, x, y + movimiento, papelito);
		y= y + movimiento;
		break;
		case teclas.LEFT:
		dibujarLinea(colorcito, x, y, x - movimiento, y, papelito);
		x = x - movimiento;
		break;
		case teclas.RIGHT:
		dibujarLinea(colorcito, x, y, x + movimiento, y, papelito);
		x = x + movimiento;
		break;
		case teclas.UP:
		dibujarLinea(colorcito, x, y, x, y - movimiento, papelito);
		y = y - movimiento;  
		break;
		default:
		console.log("otra tecla")

	}
}