window.onload = function(){
    
    var fechaActual = new Date();
    var fechaFinal = new Date('12/20/2017');
    var diasRestantes = calcularDias(fechaFinal, fechaActual);
    console.log(diasRestantes);
    
    var vnumeros = diasRestantes.toString();
    var par = document.getElementsByTagName('p')[0];
   
    for(i=0, fin=vnumeros.length; i<fin; i++){
        par.innerHTML += "<img src='img/"+vnumeros[i]+".png'>";
    }
    
}

//funcion que le pasas una fecha final y la fecha actual y devuelve los dias que quedan hasta esa fecha
/* Ejemplo de funcion
    var fechaActual = new Date();
    var fechaFinal = new Date('12/20/2017');
    console.log(calcularDias(fechaFinal, fechaActual));
*/
function calcularDias(fechaF, fechaA){
    var diferencia = fechaF-fechaA;
    var dias = Math.floor(((((diferencia / 1000) / 60) / 60) / 24)) + 1;
    //console.log(dias);
    return dias;
    
}

