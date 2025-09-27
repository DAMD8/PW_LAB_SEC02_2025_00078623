function recordatorio() {
  let dia = document.getElementById("dia").value.trim().toLowerCase();
  let mensaje = document.getElementById("mensaje").value.trim();
  let actividad = "";

  switch (dia) {
    case "lunes":
      actividad = "Debo atender a un cliente específico.";
      break;
    case "martes":
      actividad = "Visito una agencia fuera de la ciudad.";
      break;
    case "miércoles":
    case "miercoles": // sin tilde
      actividad = "Debo llevar a mi hija al ballet.";
      break;
    case "jueves":
      actividad = "Debo priorizar entregas de desarrollo.";
      break;
    case "viernes":
      actividad = "Debo atender problemas de manera remota.";
      break;
    case "sábado":
    case "sabado":
      actividad = "Debo hacer lo que mi esposa quiera.";
      break;
    case "domingo":
      actividad = "Día libre ";
      break;
    default:
      actividad = "El día ingresado no es válido.";
  }

  let resultado = `${actividad}`;
  if (mensaje) {
    resultado += ` Nota personal: ${mensaje}`;
  }

  document.getElementById("resultado").innerHTML = resultado;
}