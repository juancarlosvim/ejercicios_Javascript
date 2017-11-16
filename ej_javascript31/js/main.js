
vidas =7;

window.onload = function(){
   

    var arrayPalabras = ["javascript", "ajax", "html", "css", "programación"];

    var palabraGenerada = generarPalabaAleatoria(arrayPalabras);
    
    colocarImagen();

}



//funcion que le pasas un arrary de palaras y te dvuelve una palabraaleatoria
function generarPalabaAleatoria(arrayDePalabras){

   

   var palabraAleatoria = Math.floor(Math.random()*arrayDePalabras.length);

   
   return arrayDePalabras[palabraAleatoria];
}

//funcion comprobar las fotos
/* <img src = onError o onLoad */
function comprobarFotos(numero){

   for(i=0; i<numero.length;i++){


   }

}
// muestro la presentacion del juego
function colocarImagen(){
    var cogerImagen = document.getElementsByTagName('img')[0];
    
    cogerImagen.src="img/0.png";
    
    var ponerVidas = document.getElementById('vidas');
    ponerVidas.textContent="Número de vidas: "+vidas; 
    
}