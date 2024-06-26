const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Bienvenido a la página de inicio");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("Acerca de nosotros");
  } else if (req.url === "/imagen.png") {
    fs.readFile("./imagen.png", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("No se encontró la imagen");
      } else {
        res.setHeader("Content-Type", "image/png");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Página no encontrada");
  }
});

server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`);
});
