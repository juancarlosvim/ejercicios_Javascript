window.onload = function(){

    var c1 = "yellow";
    var c2 = "red";
    var c3 = "black";
    var c4 = "white";

    var cogerMenu = document.getElementsByTagName('ul')[0];
    var cogerLi = document.getElementsByTagName('li');
    for(i=0,fin=cogerLi.length;i<fin;i++){
      //cambiarFondoMenu(cogerLi[i], c1, c2, c3, c4);
      cambiarMenu(cogerLi[i], c1, c2, c3);
    }


}

function cambiarMenu(menu, color1, color2, color3, color4){
  menu.addEventListener("mouseover", colorPasarRaton(color1, color2));
  menu.addEventListener("mouseout", colorPasarRaton(color3, color4));

  function colorPasarRaton(c1,c2) {
      menu.style.color = ""+c1;
      menu.style.background=""+c2;
    }


  /*menu.addEventListener("mouseout", function(){
      menu.style.color = "black";
      menu.style.background="white";
  });*/

}

function cambiarFondoMenu(obj, color1, color2, color3, color4){


      obj.addEventListener("mouseover", function(){
          obj.style.color = ""+color1;
          obj.style.background=""+color2;
      });



    obj.addEventListener("mouseout", function(){
        obj.style.color = ""+color3;
        obj.style.background=""+color4;
    });
}
