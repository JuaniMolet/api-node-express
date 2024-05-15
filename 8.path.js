const path = require("node:path");

//Barra separadora de directorios segun el sistema operativo
console.log(path.sep);

//Unir rutas con join
const filePath = path.join("/content", "subfolder", "test.txt");
console.log("Rutas unidas: ", filePath);

//Basename: nombre del archivo
const base = path.basename(filePath);
console.log("Nombre del archivo: ", base);

//Nombre del archivo sin extension
const baseSinExtension = path.basename(filePath, ".txt");
console.log("Nombre del archivo sin extension: ", baseSinExtension);

//Extensión del archivo
const ext = path.extname(filePath);
console.log("Extension del archivo: ", ext);
