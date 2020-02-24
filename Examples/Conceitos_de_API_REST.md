# Como Funciona?

> FLuxo da requisição e resposta;
> Requisição feita por um Cliente;
> Respsota é retornada através de uma estrutura de dados;
> CLiente recebe resposta e processa resultado.

# Rotas Utilizam Métodos HTTP:

> GET http://minhaapi.com/users
> POST http://minhaapi.com/users
> PUT http://minhaapi.com/users
> DELETE http://minhaapi.com/users


> GET : BUSCAR ALGO DENTRO DO BANCO DE DADOS
> POST : CRIAR ALGO DENTRO DO BANCO DE DADOS
> PUT : ALTERAR ALGO DENTRO DO BANCO DE DADOS
> DELETE : DELETAR ALGO DENTRO DO BANCO


## Toda aplicação que utiliza o conceito de API REST é trabalhada em cima de JSON
## JSON - (Javascript Object Notation)

> Ex: {
>   "User": {
>     "name" : "Moisés",
>      "email": "moisesboas@gmail.com",
>       "tech" : [ "ReactJS", "NodeJS", "React Native", "Adobe XD", "Photo Shop"],
>       "company": {
>         "Name" : "Greenone",
>         "Setor": "Development Ti"
>     }
>   }
> }

# HTTP CODES


- 1xx: Informational

- 2xx: Sucesss

- 3xx: Redirection

- 4xx: ClIENT Error

