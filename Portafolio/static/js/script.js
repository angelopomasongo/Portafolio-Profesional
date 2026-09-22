// 1. CAMBIO DE TEMA (MODO CLARO / OSCURO BÁSICO)
function cambiarTema() {
    var cuerpo = document.body;

    // Si el fondo actual está en blanco, lo volvemos oscuro
    if (cuerpo.style.backgroundColor === "white") {
        cuerpo.style.backgroundColor = "#11151c";
        cuerpo.style.color = "#cccccc";
    } 
    // Si no está en blanco, lo cambiamos a modo claro
    else {
        cuerpo.style.backgroundColor = "white";
        cuerpo.style.color = "#333333";
    }
}

// 2. FILTRAR PROYECTOS (CAMBIANDO .style.display POR ID)
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