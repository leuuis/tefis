var dibujo, lienzo; //se dibuja sobre el eje de cordenadas no sobre el area canvas
				// el eje de cordenadas se trabaja con texto para dibujar
function inicio ()
{
	dibujo = document.getElementById("dibujito"); // metemos el canvas en dibujo
	lienzo = dibujo.getContext("2d"); //obtenemos el lienzo o ejes de cordenadas xy del canvas que metimos en dibujo
	
	//Pasamos por parametro el contexto lienzo a la funcion que 
	//dibujara la grilla

	dibujarGrilla(lienzo);


	//dibujamos un marco
	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.strokeStyle ="#F00"; //indico el color de la pincelada o sea el estilo
	lienzo.stroke(); //con esta funcion le decimos lienzo, toma tu pincel y mancha con los datos anteriores

	//Haremos un circulo
	//tener en cuenta que un radian es tomar el radio y colocarlo sobre la curva
	//del circulo, para dibujar medio circulo necesitamos 3.141516 radianes o sea PI
	//con 2PI hacemos un circulo

	//Necesitaremos hacer un trazo nuevo con otro color
	var context = document.querySelector("#dibujito").getContext('2d');
	lienzo.beginPath();
	lienzo.strokeStyle ="#000";
	lienzo.fillStyle = "#00F";
	lienzo.arc(150,150, 100, (Math.PI * 2), false) //creamos un arco con sus parametros centro, radio, cantidad de radianes y false o true	
	context.fill();	
	lienzo.stroke(); //ordeno manchar									//para decirle en contra o a favor d emanecillas del reloj
	lienzo.closePath(); //aqui temrina mi segundo trazo
/*

context.beginPath();
context.fillStyle = "red";
context.strokeStyle="black";
context.arc(50, 50, 5, 0, 2 * Math.PI, false);
context.fill();
context.stroke();
context.closePath(); */
	
}


function dibujarGrilla (l)		
	{



		var ancho = 300, alto = 300;
		var linea;
		var entrelineado = 30; //cada 30 pixeles una linea
		var limiteX = ancho / entrelineado; //cantidad de lineas que caben en x
		var limiteY = alto / entrelineado; //cantidad de lineas que caben en y
		var desplazamiento;
		var limiteCudrado = 600/30;

		lienzo.strokeStyle = "#AAA"; // color del pincel
		lienzo.fillStyle = "ABAFFF076";

		//LINEAS con sentido directo
		for(linea = 0; linea <= limiteCudrado; linea++)
		{
			dimensionX = linea * entrelineado;
			 //Me da la diemensional en x
			dimensionY = dimensionX;
			//dimensionY es igul a x
			lienzo.beginPath(); //inicio un camino para lineas independientes
			//lienzo.strokeStyle = "#AAA"; pondre esta linea fuera del for porque sera igual para los dos
			lienzo.moveTo(dimensionX, 0);
			lienzo.lineTo(0, dimensionY);
			lienzo.stroke();
			lienzo.closePath(); //cierro el camino
		}

		//lineas con sentido inverso
		 for(linea = 0; linea <= limiteCudrado; linea++)
		{
			dimensionX = linea * entrelineado;
			 //Me da la diemensional en x
			dimensionY = dimensionX;
			//dimensionY es igul a x
			lienzo.beginPath(); //inicio un camino para lineas independientes
			//lienzo.strokeStyle = "#AAA"; pondre esta linea fuera del for porque sera igual para los dos
			lienzo.moveTo(0, (alto - dimensionY));
			lienzo.lineTo(dimensionX, alto );
			lienzo.stroke();
			lienzo.closePath(); //cierro el camino
		}

//TAREA COLOCAR LAS LINEAS EN DIAGONAL 
//Y RELLENAR DE ALGUN COLOR EL CIRCULO
	}							 
