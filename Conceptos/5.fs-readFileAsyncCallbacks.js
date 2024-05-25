//Script que lee dos archivos de texto y muestra su contenido en consola de manera asincrona.
// Ser asincrono significa que el programa no se detiene y sigue ejecutando otras operaciones mientras se lee el archivo.
// Se llama Callback a la operación que se ejecuta cuando se completa una función asincrona.
const fs = require("node:fs");
console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
