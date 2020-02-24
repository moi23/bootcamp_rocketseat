const express = require("express");

const server = express();

//sempre que / for requisitada é retornado um JSON

server.get("/", (req, res) => {
  return res.json({
    User: {
      name: "Moisés",
      email: "moisesboas@gmail.com",
      tech: ["ReactJS", "NodeJS", "React Native", "Adobe XD", "Photo Shop"],
      company: {
        Name: "Greenone",
        Setor: "Development Ti"
      }
    }
  });
});

server.listen(3000);
