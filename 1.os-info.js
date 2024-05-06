const os = require('node:os');

console.log("INFORMACION DEL SISTEMA OPERATIVO.");
console.log("Sistema Operativo: " + os.platform());
console.log("Version del sistema operativo: " + os.release());
console.log("Memoria total: " + os.totalmem() + " bytes");
console.log("Memoria libre: " + os.freemem() + " bytes");
console.log("Arquitectura: " + os.arch());
console.log("Numero de CPUs: " + os.cpus().length);
console.log("Interfaces de red: " + os.networkInterfaces());
console.log("Directorio personal: " + os.homedir());
console.log("Directorio temporal: " + os.tmpdir());
console.log("Nombre del host: " + os.hostname());
console.log("Plataforma: " + os.platform());
console.log("Tipo de sistema operativo: " + os.type());
console.log("Uptime: " + os.uptime() / 60 / 60 / 24 + " dias");