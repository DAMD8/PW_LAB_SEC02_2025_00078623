function ordenar(arr) {
    const nuevoArray = [...arr];
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }   
        }
    }
    return nuevoArray;
}

console.log(ordenar([12, 23, 42, 25, 11, 42, 69, 524, 51, 125, 213, 41, 91, 1]));

function esPar(numero) {
    return numero % 2 == 0;
}
console.log(esPar(7));

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) { return dias }
    altura -= velocidadDecrecimiento;
  }
  return dias;
}