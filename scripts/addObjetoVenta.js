const numElements = 4;

function addObjectVenta() {
    var formularioPrincipal = document.getElementById("formularioGen");

    var nombre = document.getElementById("objNombre");
    var descripcion = documetn.getElementById("descripcion");
    var ubicación = "Las palmas";
    var costo = document.getElementById("costo");

    var categorias = documetn.getElementById("etiqueta");
    var indice = categorias.selectedIndex;
    var categoria = categorias.options[indice];
    categoria = categoria.text;

    var file = document.getElementById("objImage");
    file.pipe("../img/Objeto/Objetos Venta/obj" + numElements++);

    alert(
        nombre + "\n" +
        descripcion + "\n" +
        ubicación + "\n" +
        costo + "\n" +
        categoria
    );
}
document.getElementById("addObject").addEventListener("click", addObjectVenta, false);