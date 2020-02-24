const express = require("express");

const server = express();

// Query Params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Moisés", "email": "moisesboas@gmail.com" }

//localhost:3000/?nome=moises

http: server.get("/", (req, res) => {
  const nome = req.query.nome;
  return res.json({
    message: `Hello ${nome}`
  });
});

server.listen(3000);
