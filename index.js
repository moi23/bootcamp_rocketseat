const express = require("express");

const server = express();

// Query Params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Moisés", "email": "moisesboas@gmail.com" }

// http://localhost:3000/users/42

http: server.get("/users/:id", (req, res) => {
  const id = req.params.id;
  return res.json({
    message: `Buscando o Usuário ${id}`
  });
});

server.listen(3000);
