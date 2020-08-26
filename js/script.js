//Metodo para mostrar mensajes
function mensajeAlert() {
    alert("Hola mundo!!!");
}

//Prompt
function cajitaDeTexto() {
    var nombre = prompt('Ingrese su nombre');
    document.write("<h1> Su nombre es " + nombre + "</h1>");
}

//Confirm
function confirmar() {
    var respuesta = confirm("Esta seguro que desea eliminar el archivo?");
    if (respuesta == true) {
        alert("Archivo eliminado correctamente.");
    } else {
        alert("Archivo no eliminado.");
    }
}

function consola() {
    console.log("Soy tu mejor amigo para los errores");
}

/*galaxia.addEventListener("click",function () {
    
})*/

var galaxia = document.getElementById("galaxia");

galaxia.addEventListener("dblclick", () => {
    //alert("Soy el DOM");
    //Modificamos el css
    galaxia.style.width = "400px";
    galaxia.style.borderRadius = "50px"
})

//Mouse

var box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
    box.classList.replace("box", "cambio1")

})

//mouseleave
/*El primer parametro es la clase existente o actual y
 el segundo parametro es la que va a remplazar*/
box.addEventListener("mouseleave", function() {
    box.classList.replace("cambio1", "box")
})

box.addEventListener("mousemove",()=>{
    console.log("El mouse se esta moviendo")
})

box.addEventListener("mousedown",()=>{
    console.log("Has dado click dentro del div")
})

box.addEventListener("mouseup",()=>{
    console.log("Has levantado el click dentro del div")
})

//Teclado

var teclado = document.getElementById("teclado");

/*teclado.addEventListener("keydown",()=>{
    console.log("Has oprimido una tecla")
})

teclado.addEventListener("keypress",()=>{
    console.log("Tienes la tecla tecla sostenida")
})*/

teclado.addEventListener("keyup",(e)=>{
    console.log(e.key)

    if (e.key.toLowerCase()=="w" || e.key=="W") { //if (e.key=="w" || e.key=="W")
        alert("Vas hacia adelante")
    }
    /*if (e.key.toLowerCase()=="a") {
        alert("Vas hacia la izquierda")
    }
    if (e.key.toLowerCase()=="d") {
        alert("Vas hacia la derecha")
    }
    if (e.key.toLowerCase()=="s") {
        alert("Vas hacia atras")
    }
    else{
        alert("Sin movimiento")
    }*/
})

//Objeto evento

var padre=document.getElementById("padre");

padre.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
    e.target.style.background="red"
    //e.target.classList.add("color")
})

//Crear elementos dentro de un nodo o etiqueta

var lista=document.getElementById("lista");
var agregar=document.getElementById("agregar");

agregar.addEventListener("click",()=>{
    var texto=document.getElementById("texto").value;
    /*Me trae el texto o información ingresado dentro del input */ 

    var etiqueta=document.createElement("li");
    //Creo la etiqueta

    etiqueta.textContent=texto;
    //Asignamos el valor dentro de la etiqueta, inserto el texto que tiene el input

    lista.appendChild(etiqueta);
    //Agregamos la etiqueta a la lista o nodo
})