window.onload = function(){
    
    mover =setInterval(moverTexto, 100);
}

function moverTexto(){
    
    texto = document.getElementsByTagName("p")[0].textContent;
    
    
    inicio = texto[0];
    
    texto = texto.replace(inicio[0], "");
    
    nueva = texto + inicio;
    
    document.getElementsByTagName("p")[0].textContent = nueva;
    
   
    
}