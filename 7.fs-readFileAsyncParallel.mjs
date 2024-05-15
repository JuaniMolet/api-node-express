//Script que lee dos archivos de texto y muestra su contenido en consola de manera asincrona en PARALELO.
// Ser asincrono significa que el programa no se detiene y sigue ejecutando otras operaciones mientras se lee el archivo.
// Paralelo significa que se leen los archivos al mismo tiempo.
import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text1, text2]) => {
  console.log(text1);
  console.log(text2);
});
