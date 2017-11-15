window.onload = function() {
  var boton = document.getElementById('visitar').addEventListener("click", function() {
      seleccionarPagina();
    });


}

function seleccionarPagina() {

  var arrayPaginas = ["https://github.com/","https://stackoverflow.com/", "https://forum.xda-developers.com/", "http://www.htcmania.com/portal.php"];
  var cogerCheckbox = document.getElementsByName('paginaWeb');
  var arrayValores = new Array();

  for (var i = 0; i < cogerCheckbox.length; i++) {
    arrayValores[i] = cogerCheckbox[i].id;
  }

  

  for (var i = 0; i < arrayPaginas.length; i++) {
      if(document.getElementById(arrayValores[i]).checked==true){
        window.open(arrayPaginas[i]);
      }
  }
}
