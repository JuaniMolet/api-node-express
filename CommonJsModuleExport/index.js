//CommonJS require module.
//No es necesario poner la extension. Porque Node.js busca por defecto un archivo con la extensión .js, .json o .node.
const { sum } = require('./sum');
console.log(sum(1, 2)); // 3