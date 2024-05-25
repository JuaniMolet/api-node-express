const fs = require("node:fs/promises");

//LEER 2 ARCHIVOS CON PROMESAS
console.log("Arranca a leer el primer archivo.");
const text = fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log(text);
});
console.log("Arranca a leer el segundo archivo.");
const text2 = fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log(text);
});

console.log("Fin");
