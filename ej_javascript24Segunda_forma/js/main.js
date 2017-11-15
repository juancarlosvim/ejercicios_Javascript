window.onload = function(){

  var cogerBoton = document.getElementsByName('enviar')[0];

  cogerBoton.addEventListener("click", abrirPagina);

}

function abrirPagina(){

  var cogerCheckbox = document.getElementsByName('paginaWeb');
 

  var valueDelRadio = obtenerCheckbox(cogerCheckbox);
  for (var i = 0; i < valueDelRadio.length; i++) {
    
    window.open(valueDelRadio[i]);
    
  }

}
// OBTENER el checkbox seleccionado
function obtenerCheckbox(r){
  var valor= [];
  
    for(i=0;i<r.length;i++){
      if(r[i].type=="checkbox" && r[i].checked){
        valor[valor.length] = r[i].value +".html";
       
      }
    }
    return valor;
}
