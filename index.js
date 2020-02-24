const express = require("express");

const server = express();

// sempre que a rota / for requisitada;
// o parametro res irá receber a função send() passando como valor "Hello World"

server.get("/", (req, res) => {
  return res.send("Hello World");
});

server.listen(3000);
