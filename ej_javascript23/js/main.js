window.onload = function(){

  var cogerBoton = document.getElementsByName('enviar')[0];

  cogerBoton.addEventListener("click", abrirPagina);

}

function abrirPagina(){

  var cogerRadio = document.getElementsByName('paginaWeb');
  var cogerForm = document.getElementsByTagName('form');

  var valueDelRadio = obtenerRadioSeleccionado(cogerRadio);
  cogerForm[0].action=""+obtenerRadioSeleccionado(cogerRadio)+".html";
  cogerForm[0].submit();

}
// OBTENER el radio seleccionado
function obtenerRadioSeleccionado(radio){
  var valor="";
    for(i=0;i<radio.length;i++){
      if(radio[i].checked){
        valor = radio[i].value;
      }
    }
    return valor;
}
