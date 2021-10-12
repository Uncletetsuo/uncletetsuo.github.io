document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papelito = cuadrito.getContext("2d");
var colorcito = document.getElementById("Seleccionar_color")
var x ;
var y ;
console.log(colorcito)

function dibujarMouse(evento) 
{
    if (evento.buttons == 1) {
        dibujarLinea(colorcito.value, x, y, evento.layerX, evento.layerY, papelito);
        console.log(evento)

    }
    x = evento.layerX;
    y = evento.layerY;
    console.log("estoy dibujando")
}


function dibujarLinea(colorcito, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
	lienzo.beginPath();
	lienzo.lineWidth = 3
	lienzo.strokeStyle = colorcito;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath(); 
}