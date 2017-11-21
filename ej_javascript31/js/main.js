
vidas =7;
fallos = 0;
var ruta = "img/" //ruta generica
var debug = true // para imprimir en consola
window.onload = function(){

    var arrayPalabras = ["javascript", "ajax", "html", "css", "programación"];

    var arrayImagenes = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

    var palabraGenerada = generarPalabaAleatoria(arrayPalabras);

    rellenarPalabra(palabraGenerada);
    colocarImagen();


}



//funcion que le pasas un arrary de palaras y te dvuelve una palabraaleatoria
function generarPalabaAleatoria(arrayDePalabras){

   var palabraAleatoria = Math.floor(Math.random()*arrayDePalabras.length);
   return arrayDePalabras[palabraAleatoria];
}

/* funcion relllenar palabra _ _ _ */
function rellenarPalabra(palabra) {

    var cogerPalabra = document.getElementById('palabraGenerada');
    for(i=0, fin=palabra.length; i<fin;i++){
        cogerPalabra.innerHTML +="_ ";
    }

}

// muestro la presentacion del juego
function colocarImagen(){
    var cogerImagen = document.getElementsByTagName('img')[0];
    
    cogerImagen.src= ruta+""+fallos+".png";
    
    var ponerVidas = document.getElementById('vidas');
    ponerVidas.textContent="Número de vidas: "+vidas; 
    
}

function cambiarImagen(fallos) {
    var cogerImagen = document.getElementsByTagName('img')[0];
    cogerImagen.src= ruta+""+fallos+".png";
}