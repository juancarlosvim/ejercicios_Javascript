
vidas =7;

window.onload = function(){
   

    var arrayPalabras = ["javascript", "ajax", "html", "css", "programación"];

    var arrayImagenes = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png"];

    var palabraGenerada = generarPalabaAleatoria(arrayPalabras);
    
    colocarImagen();
    comprobarFotos(arrayImagenes);

}



//funcion que le pasas un arrary de palaras y te dvuelve una palabraaleatoria
function generarPalabaAleatoria(arrayDePalabras){

   

   var palabraAleatoria = Math.floor(Math.random()*arrayDePalabras.length);

   
   return arrayDePalabras[palabraAleatoria];
}

/*funcion que le pasamos la ruta de la imagen y nos devuelve
verdadero si carga la imagen y falso si no carga la imagen
*/
function comprobarFotos(ruta) {


    var img = new Image();

    img.onload = function () {
        //alert("ok");
        var ok = true;
        console.log(ok);
        return ok;
    }
    img.onerror = function () {
        //alert("false");
        var ok = false;
        console.log(ok);
        return ok;
    }
    for(i=0, fin =ruta.length;i<fin;i++){
        img.src = ""+ruta[i];

    }

}
// muestro la presentacion del juego
function colocarImagen(){
    var cogerImagen = document.getElementsByTagName('img')[0];
    
    cogerImagen.src="img/0.png";
    
    var ponerVidas = document.getElementById('vidas');
    ponerVidas.textContent="Número de vidas: "+vidas; 
    
}