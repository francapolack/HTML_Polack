const formulario = document.querySelector("#form");
formulario.addEventListener("submit", function(event) {
event.preventDefault();

const nombre = document.querySelector("#nombre").value;
const telefono = document.querySelector("#telefono").value;
const viaje = document.querySelector("#viaje").value;

const encabezado = "Nombre,Telefono,ViajeDeseado";
const fila = [nombre,telefono,viaje].map(dato => {
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