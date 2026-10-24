const formulario = document.querySelector("#form");
formulario.addEventListener("submit", function(event) {
event.preventDefault();

const nombre = document.querySelector("#nombre").value;
const apellido=document.querySelector("#apellido").value;
const telefono = document.querySelector("#telefono").value;
const clase = document.querySelector("#clase").value;

const encabezado = "Nombre,Apellido,Telefono,Clase";
const fila = [nombre,apellido,telefono,clase].map(dato => {
return '"' + dato.replace(/"/g, '""') + '"';
}).join(",");
const contenido = encabezado + "\r\n" + fila + "\r\n";

const archivo = new Blob(
["\uFEFF" + contenido],
{ type: "text/csv;charset=utf-8;" }
);

const enlace = document.createElement("a");
enlace.href = URL.createObjectURL(archivo);
enlace.download = "reservas.csv";

enlace.click();

URL.revokeObjectURL(enlace.href);
alert("Se generó el archivo alumnos.csv");
});