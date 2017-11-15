window.onload = function() {
  var boton = document.getElementById('visitar').addEventListener("click", function() {
      seleccionarPagina();
    });


}
// envio el array de input tipo radio
//devuelve el radio seleccionado
/*function obtenerRadioSeleccionado(radio) {
  var valor = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].cheked) {
      valor = radio[i].value;
    }
  }
  return valor;
}*/

function seleccionarPagina() {

  var arrayPaginas = ["ejemplo1.html", "ejemplo2.html", "ejemplo3.html", "ejemplo4.html", "ejemplo5.html"];
  var cogerRadio = document.getElementsByName('paginaWeb');
  var arrayValores = new Array();

  for (var i = 0; i < cogerRadio.length; i++) {
    arrayValores[i] = cogerRadio[i].id;
  }

  for (var i = 0; i < arrayPaginas.length; i++) {
      if(document.getElementById(arrayValores[i]).checked==true){
        window.open(arrayPaginas[i]);
      }
  }
}
