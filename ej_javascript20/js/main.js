window.onload = function(){
    
    navegador = navigator.userAgent;
    navegadorMinus = navegador.toLowerCase();  
   cambiarLogoNavegador(navegadorMinus);
}

function cambiarLogoNavegador(navegador){
    
    imagenNavegador = document.getElementsByTagName("img");
    
    
    
    if(navegador.indexOf('firefox') !=-1){
        
         imagenNavegador[0].src="img/mozilla.png";
    }else if(navegador.indexOf('chrome') !=-1){
        imagenNavegador[0].src="img/chrome.png";
    }else if(navegador.indexOf('opera') !=-1){
              imagenNavegador[0].src="img/opera.png";
             }else if(navegador.indexOf('msie') !=-1){
                 imagenNavegador[0].src="img/explorer.png";
             }
    
   
    
}

