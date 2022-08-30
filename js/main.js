// WHILE

let entrada = prompt('Ingrese el nombre de su juego favorito');

while (entrada != 'FINALIZAR') {
    alert('El jugador ingresó '+ entrada);
    entrada = prompt('¿Qué otro juego te gustó?');
}
