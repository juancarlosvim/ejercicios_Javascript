

window.onload = function(){
   

    var arrayPalabras = ["javascript", "ajax", "html", "css", "programación"];

    var palabraGenerada = generarPalabaAleatoria(arrayPalabras);
}



//funcion que le pasas un arrary de palaras y te dvuelve una palabraaleatoria
function generarPalabaAleatoria(arrayDePalabras){

   

   var palabraAleatoria = Math.floor(Math.random()*arrayDePalabras.length);

   
   return arrayDePalabras[palabraAleatoria];
}

