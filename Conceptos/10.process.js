// El Objeto Process es un objeto global que provee información y control sobre el proceso de Node.js.
// Como un objeto global, no requiere ser requerido para ser usado.

//Argumentos de la línea de comandos
// El objeto process tiene una propiedad argv que es un array que contiene los argumentos de la línea de comandos.
console.log(process.argv);

//Controlar la salida del proceso
// El método process.exit() termina el proceso actual de Node.js con el código de salida especificado.
// Un código de salida de 0 indica que el proceso terminó sin errores. Un código de salida distinto de 0 indica que el proceso terminó con errores.
// process.exit(1);

// Controlar eventos del proceso
// El objeto process emite eventos que pueden ser usados para controlar el proceso de Node.js.
process.on("exit", (code) => {
  console.log(`Proceso terminado con código: ${code}`);
});

// Current working directory
// La propiedad process.cwd() retorna el directorio de trabajo actual del proceso.
// Retorna el directorio donde se ejecutó el script
console.log(process.cwd());

// Platform
// La propiedad process.platform retorna la plataforma en la que se está ejecutando Node.js.
console.log("Platform: ", process.platform);

// Platform environment variables
// La propiedad process.env contiene las variables de entorno del sistema operativo.
console.log("ENV: ", process.env);
