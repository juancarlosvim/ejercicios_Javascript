window.onload = function(){
    
}

var datos="";
limite = 5;

function clickCrear(){
    
    
     nombre = new Array();
     edad = new Array();
    
    var guardarNombres = 0;
    var guardarEdad = 0;
    var limiteDenombres = 5;
    
    
    while(guardarNombres<limite){
        
        var pedirNombres = prompt("Introduce un nombre "+(guardarNombres+1));
       
        
        nombre[guardarNombres] = pedirNombres;
     
        
        guardarNombres++;
       
       
    }

	while(guardarEdad<limite){
        
       
        var pedirEdad = prompt("Introduce una edad "+(guardarEdad+1));
       
        
        edad[guardarEdad] = pedirEdad;
        
     
        guardarEdad++;
       
       
    }
    
   
    for(i=0;i<limiteDenombres;i++){
        
        datos += nombre[i]+"*"+edad[i]+"#";
    }
    
    alert(datos);
   
    
}


function crearTabla(){
    
    
    
    

     usuarios = [];
    edades = []
    
    for(i=0;i<limite;i++){
        usuarios[i] = datos.split('#')[i].split('*')[0]; 
        edades[i] = datos.split('#')[i].split('*')[1]; 
    }


    miTabla = document.getElementsByTagName("table")[0];
    
    miTabla.innerHTML = "<tr><td>Nombre</td><td>Edad</td></tr>"
    
    for(i=0;i<limite;i++){
        
        miTabla.innerHTML += "<tr><td>"+usuarios[i]+"</td><td>"+edades[limite-i-1]+"</td></tr>";
        
        
    }
}


