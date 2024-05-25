// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
//Es necesario poner la extension del archivo. Porque Node.js busca por defecto un archivo con la extensión .js, .json o .node.
import { sum } from "./sum.mjs";

console.log(sum(1, 2)); // 3
