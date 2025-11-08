const jsonServer = require('json-server');
const cors = require('cors'); // 1. Importe a biblioteca CORS
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; 

server.use(cors());

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});