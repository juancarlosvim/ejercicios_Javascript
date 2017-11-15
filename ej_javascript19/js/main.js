window.onload = function() {


    ejectuarFrase = setInterval(colocarFrase, 3000);

    ejecutarImagen = setInterval(colocarImagen,5000);

}

function colocarFrase(){
  ponerFrase = document.getElementsByTagName('p');
  for (i = 0; i < ponerFrase.length; i++) {

    ponerFrase[i].textContent = "" + generarFrase();
  }

}

function colocarImagen(){

    ponerImagen = document.getElementsByTagName("img");

    for (var i = 0; i < ponerImagen.length; i++) {
      ponerImagen[i].src=""+generarImagenes();
    }

}


//realizo la funcion para que devuelva una frase aleatoria
function generarFrase() {
  frases = ["esto es una prueba", "segunda frase", "tercera frase", "texto5", "texto6", "texto7", "prueba", "prueba9", "ultimo"];


    var frasesAleatorias = frases[Math.floor(Math.random() * frases.length)];

  return frasesAleatorias;

}

function generarImagenes() {

  imagenes = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];

  imagenesAleatorias = imagenes[Math.floor(Math.random()* imagenes.length)];

  return imagenesAleatorias;


}
