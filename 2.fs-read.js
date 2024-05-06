const fs = require("node:fs");

//LEER 2 ARCHIVOS SINCRONAMENTE.
// console.log("Arranca a leer el primer archivo.");
// const text = fs.readFileSync("./archivo.txt", "utf-8");
// console.log(text);
// console.log("Arranca a leer el segundo archivo.");
// const text2 = fs.readFileSync("./archivo2.txt", "utf-8");
// console.log(text2);

//LEER 2 ARCHIVOS ASINCRONAMENTE.
//  console.log("Inicio");
//  console.log("Arranca a leer el primer archivo.");
//  fs.readFile("./archivo.txt", "utf-8", (err, text2) => {
//    if (err) {
//      console.log(err);
//    } else {
//      console.log(text2);
//    }
//  });
//  console.log("Arranca a leer el segundo archivo.");
//     fs.readFile("./archivo2.txt", "utf-8", (err, text2) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(text2);
//     }
//     });
//  console.log("Fin");
