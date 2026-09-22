function cambiarTema() {
    var cuerpo = document.body;
    var cajas = document.querySelectorAll(".caja-proyecto, .cuadro-texto, .caja-educacion, .caja-datos-contacto, .boton-red");

    if (cuerpo.className === "tema-oscuro") {
        cuerpo.className = "tema-claro";
        for (var i = 0; i < cajas.length; i++) {
            cajas[i].style.backgroundColor = "#f0f0f0";
            cajas[i].style.color = "#000000";
        }
    } else {
        cuerpo.className = "tema-oscuro";
        for (var i = 0; i < cajas.length; i++) {
            cajas[i].style.backgroundColor = "";
            cajas[i].style.color = "";
        }
    }
}

function mostrarTodos() {
    document.getElementById("proyecto1").style.display = "block";
    document.getElementById("proyecto2").style.display = "block";
}

function mostrarHtml() {
    document.getElementById("proyecto1").style.display = "block";
    document.getElementById("proyecto2").style.display = "none";
}

function mostrarJs() {
    document.getElementById("proyecto1").style.display = "none";
    document.getElementById("proyecto2").style.display = "block";
}