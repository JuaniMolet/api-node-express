//Script que lee dos archivos de texto y muestra su contenido en consola de manera asincrona.
// Ser asincrono significa que el programa no se detiene y sigue ejecutando otras operaciones mientras se lee el archivo.
// Las promesas son una forma de trabajar con código asincrono. 
const fs = require("node:fs/promises");
console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((data) => {
  console.log(data);
});

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((data) => {
  console.log(data);
});
