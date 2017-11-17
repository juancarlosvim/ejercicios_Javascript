window.onload = function () {



    var arrayImagenes = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png"];
    comprobarFotos(arrayImagenes);
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