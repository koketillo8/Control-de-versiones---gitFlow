function cambiarTexto() {

    document.getElementById("texto").innerHTML =
        "El contenido de este elemento ha sido modificado mediante JavaScript.";

}
function cambiarImagen() {

    document.getElementById("imagen").src = "img/imagen2.jpg";

}
function cambiarEstilo() {

    const texto = document.getElementById("textoEstilo");

    texto.style.color = "red";
    texto.style.fontSize = "30px";
    texto.style.backgroundColor = "yellow";

}