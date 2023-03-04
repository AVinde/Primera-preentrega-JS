let monto = parseInt(prompt("Ingrese cuanto dinero quiere invertir."));
let meses = parseInt(prompt("Ingresar la cantidad de meses a invertir."));

if (meses <= 12 && meses > 0){
    alert("El interés anual es de 40%");
    for (let i = 0; i <= meses; i++) {
        let interes12 = i * 0.04 * monto + monto;
        alert("Su capital en el mes " + i + " es de " + interes12 + '.');
    }
} else if(meses <= 24 && meses > 12){
    alert("El interés anual es de 60%");
    for (let i = 0; i <= meses; i++) {
        let interes24 = i * 0.06 * monto + monto;
        alert("Su capital en el mes " + i + " es de " + interes24 + '.');
    }
} else if(meses <= 36 && meses > 24){
    alert("El interés anual es de 80%");
    for (let i = 0; i <= meses; i++) {
        let interes36 = i * 0.08 * monto + monto;
        alert("Su capital en el mes " + i + " es de " + interes36 + '.');
    }
} else if(meses < 1){
    alert('La cantidad de meses indicada es menor a la mínima permitida.')
} else if(meses > 36){
    alert('La cantidad de meses indicada es mayor a la náxima permitida.')
}

alert ('Gracias por elegirnos.')