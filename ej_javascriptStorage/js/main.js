var debug = true;
/* jslint browser */
/* global window */
var window = null;
/* global document*/
var document = null;
/* global console */
var console = null;

window.onload = function () {
    "use strict";
    var btnGrabar = document.getElementsByTagName("button")[0];
    btnGrabar.addEventListener("click", grabarDato);
    // el evento es de window
    window.addEventListener("storage", fStorage);
};
function grabarDato() {
    "use strict";
    var inputNombre = document.getElementById("idNombre").value;
    localStorage.setItem("nombre", inputNombre);
}
function fStorage(e) {
    "use strict";
    if (debug) {
        console.log("Ha cambiado" + e);
    }
}
