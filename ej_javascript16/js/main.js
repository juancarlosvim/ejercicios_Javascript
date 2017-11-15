window.onload = function(){
    
    contC =0;
    contV = 0;
    
    pedirFrase = prompt("Introduce una frase");
    
    frase = pedirFrase.toLowerCase();
    
    for(i=0;i<frase.length;i++){
         if(frase.charAt(i)=='a'||frase.charAt(i)=='e'||frase.charAt(i)=='i'||frase.charAt(i)=='o'||frase.charAt(i)=='u'){
            contV++;
        }else if(frase.charAt(i) !=' '){
            contC++;
        }
    }
    
    escribirFrase = document.getElementsByTagName("p");
    
    escribirFrase[0].textContent= "La ["+frase+"] tiene el numero de vocales es "+contV+" y el numero de consonantes es "+contC;
    
    
    
}