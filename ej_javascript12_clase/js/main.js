contador = 0;
window.onload = function(){
    
    
    
  
   cambiarFondo= window.setTimeout(cambiarFoto(), 1000)
    
  
   
}

function cambiarFoto(){

    
   
    
    imagenesArray = new Array(
    ["img/1.jpg"],
    ["img/2.jpg"],
    ["img/3.jpg"]

    );

    //console.log(imagenesArray.length);

   

    document.getElementsByTagName("img")[0].src=imagenesArray[contador]
    contador++;
    cambiarFondo= window.setTimeout(cambiarFoto, 1000)
    if(contador==imagenesArray.length){
        contador=0;
    }
    
}