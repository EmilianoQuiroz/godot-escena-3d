//SANTIAGO QUIROZ

/*  DESAFIO CODER: Algoritmos con condicionales y ciclos
Algoritmo con condicionales: 
    Se le pide al usuario un numero que representa una 
    temperatura en grados Farenheit, esta temperatura se 
    guarda en una variable(gradosFarenheit), se parsea 
    y se calcula mediante la formula de pasaje de temperaturas
    de Farenheit a celsius y luego mediante un condicional 
    se determina si la temperatura puede hervir el agua o no
    segun sea mayor o menor a 100º.
*/
/*
let gradosFarenheir = prompt("Digite los grados en Farenheit: ");

gradosFarenheir = parseInt(gradosFarenheir);

let formula = (gradosFarenheir - 32) * 5/9;

if(formula >= 100){
    alert(`La temperatura es ${formula} y puede hervir el agua.`);
}
else{
    alert(`La temperatura es ${formula} y es muy baja para hervir el agua.`);
}
*/

/*
Algoritmo con ciclos: (Ciclo While)
    Se le pide al usuario que ingrese un dia, mediante la 
    sentencia switch se le indica al usuario que tiene que
    trabajar y que los fines de semana descansa, en caso 
    de ingresar un valor incorrecto, mediante un default, 
    se le indica el error. Con el ciclo while el codigo se
    repite en bucle hasta que se ingresa el valor "salida"
    para poder concluir con el algoritmo.

*/
let dia = prompt("Ingresa un dia: ")

while (dia != "salida"){
switch (dia){
    case "lunes":
        alert("Hoy trabajas.");
        break;
    case "martes":
        alert("Hoy trabajas.");
        break;
    case "miercoles":
        alert("Hoy trabajas.");
        break;
    case "jueves":
        alert("Hoy trabajas.");
        break;
    case "viernes":
        alert("Hoy trabajas.");
        break;
    case "sabado":
        alert("Hoy descansas.");
        break;
    case "domingo":
        alert("Hoy descansas.");
        break;
        default:
            alert("no es un dia valido");
            break;
    }
    dia = prompt("Ingresa un dia: ")
}