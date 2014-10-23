//variables globales
	var tablero;
	var fondo = 
	{
		imagenURL: "fondo.png",
	}

//funcion inicio para ejecutar en html
function inicio()
{
	var canvas = document.getElementById("campo");
	var tablero = canvas.getContext("2d");

	//Image es un objeto del navegador que me permite insertar imagenes
	fondo.imagen = new Image(); 
	//se puede agregar variables a la estructura JSON	

	fondo.imagen.onload = dibujarFondo;

	//imagen es el objeto image del navegador y nos permitira
	//obtener con onload cuando ya haya cargado la imgaen porque demora 
	//60 mls en cargar la imagen, y js solo 1 mls en saltar entre
	//las sentencias. Tampoco queremos ejecutar dibujarFondo inmediatamente
	//si no que cuando termine de cargar por eso esta sin ()
}


function dibujarFondo()
{
	tablero.drawImage(fondo.imagen, 0, 0); 
}