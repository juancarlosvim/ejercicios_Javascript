window.onload = function(){
    
    
   
     mostrarFecha();
   
     
    setInterval(horaCompleta, 1000);
    
    
}

function mostrarFecha(){
    
    fecha = new Date();
    
    diaSem = fecha.getDay();
    diaNum = fecha.getDate();
    mes =fecha.getMonth();
    mesFechaCorta =fecha.getMonth()+1; //empieza desde cero
    anio = fecha.getFullYear();
    
    
   
    
    fecha1 = document.getElementsByTagName("p");
    
    fecha1[0].textContent="Hoy es: "+diaNum+"/ "+mesFechaCorta+" / "+anio;
    
    fecha1[1].textContent="Fecha completa: "+diaEscrito(diaSem)+" a "+diaNum+" "+mesEscrito(mes)+" de " +anio;
       
   
}

function mesEscrito (mes){
        
    mesesAnio = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        
    return mesesAnio[mes]
    
}

function diaEscrito(dia){
  
    diasSemana = new Array("Domigo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
    
    return diasSemana[dia]
}

function horaCompleta(){
    
    
    horaC = new Date();
    hora = horaC.getHours();
    minutos = horaC.getMinutes();
    segundos = horaC.getSeconds();
     
    strSegundo = new String(segundos)
    if(strSegundo.length==1){
        segundos = "0"+segundos
    }
     strMinutos = new String(minutos)
    if(strMinutos.length==1){
        minutos = "0"+minutos
    }
     strHora = new String(hora)
    if(strHora.length==1){
        hora = "0"+hora
    }
    
    cuadroTexto = document.getElementsByTagName("input");
    
    cuadroTexto[0].value =" "+hora+":"+minutos+":"+segundos;
    
   
    
}

