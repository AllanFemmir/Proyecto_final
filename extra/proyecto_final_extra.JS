//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
do{
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var hijos_recargo = 0.2; // 20%
var propiedades_recargo = 0.35;
var recargo_salario = 0.5;

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var salario = prompt("ingrese su salario mensual")
var propiedades_pregunta= prompt("cuenta con propiedades a su nombre? ")
var propiedades = 0;
if (propiedades_pregunta.toLowerCase() == "si"){
  var pregunta_propiedades = prompt("ingrese la cantidad de propiedades que posee")
  propiedades = parseInt(pregunta_propiedades,10)

}
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var casado = prompt("¿Está casado actualmente?")
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad,10);
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge,10)
}

var hijos = prompt("¿Tiene hijos o hijas?")
if(hijos.toUpperCase() == "SI"){
  hijos2 = prompt("ingrese la cantidad de hijos en numeros")
  var cantidad_hijos = parseInt(hijos2,10);
}else{
  cantidad_hijos = 0
}
//Comprobamos la cantidad de hijos solamente si los tienen

/**
 * 1. convierta la cantidad de hijos a numero
 */


//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
if(edad_numero>=25 && edad_numero<50) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
if(edad_numero>50) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
/** 
 * 2. Recargo por la edad del conyuge
 */
else if(edad_conyuge_numero>=18 && edad_conyuge_numero<25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
else if(edad_conyuge_numero>=18 && edad_conyuge_numero<25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}else if(edad_conyuge_numero>50 ) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
/**
 * 3. Recargo por la cantidad de hijos 

 */ 
 var recargo_hijos = (cantidad_hijos * hijos_recargo) * precio_base;
 var salario_recargo= salario* recargo_salario;
 var recargo_propiedades = (propiedades*propiedades_recargo)*precio_base;
 recargo_total = recargo_total + recargo_hijos + salario_recargo + recargo_propiedades;



precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

var answer = prompt("¿desea continuar realizando cotizaciones ? escriba si para continuar y no para salir del sitio ");
var respuesta = answer.toLowerCase()

}while(respuesta == "si")
