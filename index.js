let monto = parseInt(prompt("Ingrese cuanto dinero quiere invertir."));
let meses = parseInt(prompt("Ingresar la cantidad de meses a invertir."));
let interesAnual= parseInt (prompt("Ingresa la tasa anual"));

function interesMensual() {
    let division = interesAnual / meses / 100;
    return division;
  }
  let interes = interesMensual();
  
  if (meses >= 1 && meses <= 36) {
    alert("El interés anual es del " + interesAnual + "%.");
    for (let i = 0; i <= meses; i++) {
      let montoAcumulado = i * interes * monto + monto;
      alert(
        "Su capital en el mes número " + i + " es de " + montoAcumulado + "."
      );
    }
  } else {
    alert('La cantidad de meses elegida es inválida.')
  }

alert ('Gracias por elegirnos.')