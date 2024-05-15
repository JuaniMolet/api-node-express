const fs = require("node:fs");

//Leer directorio actual con fs.readdir
fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Error al leer el directorio: ", err);
    return;
  } 
  files.forEach((file) => {
    console.log(file);
  });
});
