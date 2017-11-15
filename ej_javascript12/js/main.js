window.onload = function(){
    
    CambiarImagenes();

    setInterval(CambiarImagenes,2000);
   
}

function CambiarImagenes(){

    var imagenes = new Array(
        ['images/1.png'],
        ['images/2.jpeg'],
        ['images/3.jpeg'], 
        ['images/4.jpeg'],         

    );

    var index = Math.floor((Math.random()*imagenes.length))

    document.getElementById("imagen").src=imagenes[index][0];
}

