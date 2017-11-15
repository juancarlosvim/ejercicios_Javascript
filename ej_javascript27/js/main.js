window.onload = function(){
    var resolucionPantalla = screen.width+"x"+screen.height;
    var cogerInput = document.getElementsByTagName('input');
    var longitud = cogerInput.length;
    
    var escribirResolucion = document.getElementsByTagName('p')[0];
    escribirResolucion.textContent ="Tu resolución es "+resolucionPantalla;
    var errorResoluc = document.getElementsByClassName('errorResolucion');
    for(i=0;i<longitud;i++){
        if(cogerInput[i].type=="radio" && cogerInput[i].id==resolucionPantalla){
            cogerInput[i].checked = true;
            
        }
    }
    
}


